import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "./firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { extractFilenameFromUrl } from "../utils/helpers";

export async function createUser({ email, password, displayName }) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredential.user, { displayName });

  return userCredential.user;
}

export async function login({ email, password }) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((err) => console.log(err));

  return userCredential.user;
}

export async function logout() {
  await signOut(auth);
}

export function uploadToStorage({ fileDestination, file }) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, fileDestination);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Unexpected state");
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(new Error(error.message));
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL); // Resolve the promise with download URL
          })
          .catch((error) => {
            reject(new Error(error.message)); // Reject if unable to get download URL
          });
      }
    );
  });
}

export async function addDocumentToCollection({
  collectionName,
  documentID,
  data,
}) {
  await setDoc(doc(db, collectionName, documentID), data);
}

export async function addDocumentToSubCollection({
  parentCollectionName,
  parentDocumentID,
  subCollectionName,
  subDocumentID,
  data = {},
}) {
  const parentDocRef = doc(db, parentCollectionName, parentDocumentID);

  const subCollectionRef = collection(parentDocRef, subCollectionName);

  const docRef = doc(subCollectionRef, subDocumentID);

  await setDoc(docRef, data);
}

export async function searchInCollection({
  collectionName,
  searchBy, // Should be document field...
  searchValue,
  condition = "==",
}) {
  const collectionRef = collection(db, collectionName);

  const q = query(collectionRef, where(searchBy, condition, searchValue));

  const querySnapshot = await getDocs(q);
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
}

export async function getSubCollectionDocs({
  parentCollectionName,
  parentDocumentID,
  subCollectionName,
}) {
  const documentRef = doc(db, parentCollectionName, parentDocumentID);

  const subCollectionRef = collection(documentRef, subCollectionName);

  const q = query(subCollectionRef);

  const querySnapshot = await getDocs(q);

  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ documentID: doc.id, ...doc.data() });
  });
  return documents;
}

export async function getSubCollectionDocsOrdered({
  parentCollectionName,
  parentDocumentID,
  subCollectionName,
  orderByField, // Should be document field...
  orderWay = "desc",
  numOfResults,
}) {
  const parentDocRef = doc(db, parentCollectionName, parentDocumentID);

  const subCollectionRef = collection(parentDocRef, subCollectionName);

  const q = query(
    subCollectionRef,
    orderBy(orderByField, orderWay),
    limit(numOfResults)
  );

  const querySnapshot = await getDocs(q);

  if (numOfResults === 1) {
    const doc = querySnapshot.docs[0];
    if (doc) return { documentID: doc.id, ...doc.data() };
    return {};
  }

  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ documentID: doc.id, ...doc.data() });
  });

  return documents;
}

export async function updateSubCollectionDoc({
  parentCollectionName,
  parentDocumentID,
  subCollectionName,
  subDocumentID,
  updateFields = {},
}) {
  const documentRef = doc(
    db,
    parentCollectionName,
    parentDocumentID,
    subCollectionName,
    subDocumentID
  );

  await updateDoc(documentRef, updateFields);
}

export async function deleteSubCollectionDoc({
  parentCollectionName,
  parentDocumentID,
  subCollectionName,
  subDocumentID,
}) {
  await deleteDoc(
    doc(
      db,
      parentCollectionName,
      parentDocumentID,
      subCollectionName,
      subDocumentID
    )
  );
}

export async function downloadFileFromStorage({ fileUrl }) {
  // first of all you have to run this command in firebase cli...
  // gsutil cors set cors.json gs://chatappwithreact-5d21a.appspot.com
  // cors.json file in downloads folder

  const storageRef = ref(storage, fileUrl);

  const url = await getDownloadURL(storageRef);

  const response = await fetch(url);

  const blob = await response.blob();

  // Create a temporary anchor element to trigger the download
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = extractFilenameFromUrl(fileUrl);
  anchor.click();

  anchor.remove();
}

export async function getDocumentByID({ collectionName, documentID }) {
  const docRef = doc(db, collectionName, documentID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  return {};
}
