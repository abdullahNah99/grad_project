import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBaloiVzCC-9EREqlX_e8KjJGgkUdY_hnM",
//   authDomain: "graduation-project-a8c71.firebaseapp.com",
//   projectId: "graduation-project-a8c71",
//   storageBucket: "graduation-project-a8c71.appspot.com",
//   messagingSenderId: "507096424541",
//   appId: "1:507096424541:web:f2308f86a0f69e3c152db4",
//   measurementId: "G-0YK182DGVB",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCYMlRZvKEG9fUDyekkxMWQccDisAPwU9I",
  authDomain: "graduation-project-20eda.firebaseapp.com",
  projectId: "graduation-project-20eda",
  storageBucket: "graduation-project-20eda.appspot.com",
  messagingSenderId: "378707537504",
  appId: "1:378707537504:web:4892a0025c677a134d9d05",
  measurementId: "G-YWVK20QTW3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
