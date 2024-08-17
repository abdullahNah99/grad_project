import {
  addDocumentToSubCollection,
  deleteSubCollectionDoc,
  getSubCollectionDocs,
  getSubCollectionDocsOrdered,
  searchInCollection,
  updateSubCollectionDoc,
  uploadToStorage,
} from "../firebase/firebaseApis";
import { getConversationID } from "../utils/helpers";
import { localStorageInstance } from "../utils/localStorageProvider";

export function addUserToChat(user) {
  const myUserID = localStorageInstance.uid;

  if (user.id === myUserID) return;

  addDocumentToSubCollection({
    parentCollectionName: "users",
    parentDocumentID: myUserID,
    subCollectionName: "my_users",
    subDocumentID: user.id,
  });
}

export function getMyUsers() {
  const myUserID = localStorageInstance.uid;

  return getSubCollectionDocs({
    parentCollectionName: "users",
    parentDocumentID: myUserID,
    subCollectionName: "my_users",
  }).then((myUsersDocs) => {
    const myUsersIDs = myUsersDocs.map((doc) => doc.documentID);

    if (myUsersIDs.length === 0) return [];

    return searchInCollection({
      collectionName: "users",
      searchBy: "id",
      condition: "in",
      searchValue: myUsersIDs,
    });
  });
}

export function sendMessage({ receiverID, message, imageUrl = null }) {
  const myUserID = localStorageInstance.uid;

  const milliSecTime = Date.now().toString();

  const messageObj = {
    fromId: myUserID,
    msg: imageUrl ?? message,
    read: "",
    sent: milliSecTime,
    told: receiverID,
    type: imageUrl ? "image" : "text",
  };

  addDocumentToSubCollection({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(receiverID),
    subCollectionName: "messages",
    subDocumentID: milliSecTime,
    data: messageObj,
  });
}

export function sendFirstMessage({ receiverID, message, imageUrl }) {
  const myUserID = localStorageInstance.uid;

  addDocumentToSubCollection({
    parentCollectionName: "users",
    parentDocumentID: receiverID,
    subCollectionName: "my_users",
    subDocumentID: myUserID,
  }).then(() => {
    sendMessage({ receiverID, message, imageUrl });
  });
}

export function getConversationMessages({ receiverID, setMessages }) {
  return getSubCollectionDocs({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(receiverID),
    subCollectionName: "messages",
    callback: setMessages,
  });
}

export function getLastMessage({ receiverID }) {
  return getSubCollectionDocsOrdered({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(receiverID),
    subCollectionName: "messages",
    orderByField: "sent",
    numOfResults: 1,
  });
}

export function updateReadField({ message }) {
  updateSubCollectionDoc({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(message.fromId),
    subCollectionName: "messages",
    subDocumentID: message.sent,
    updateFields: { read: Date.now().toString() },
  });
}

export function deleteMessage({ messageObj }) {
  deleteSubCollectionDoc({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(messageObj.receiver_id),
    subCollectionName: "messages",
    subDocumentID: messageObj.sent,
  });
}

export function editMessage({ messageObj, newMessage }) {
  updateSubCollectionDoc({
    parentCollectionName: "chats",
    parentDocumentID: getConversationID(messageObj.receiver_id),
    subCollectionName: "messages",
    subDocumentID: messageObj.documentID,
    updateFields: { msg: newMessage },
  });
}

export async function sendImage({ receiverID, image }) {
  const milliSecTime = Date.now().toString();
  const fileDestination = `images/${getConversationID(
    receiverID
  )}/${milliSecTime}.${image.name.split(".").at(-1)}`;

  return await uploadToStorage({ fileDestination, file: image });
}

export function addToMyUsers({ uID }) {
  const myUserID = localStorageInstance.uid;

  return getSubCollectionDocs({
    parentCollectionName: "users",
    parentDocumentID: myUserID,
    subCollectionName: "my_users",
  }).then((docs) => {
    if (!docs.includes(uID))
      return addDocumentToSubCollection({
        parentCollectionName: "users",
        parentDocumentID: myUserID,
        subCollectionName: "my_users",
        subDocumentID: uID,
      });
  });
}

// export function addTeamToChat({ team, user, conversationID }) {
//   addDocumentToSubCollection({
//     parentCollectionName: "users",
//     parentDocumentID: team.uid,
//     subCollectionName: "groups",
//     subDocumentID: conversationID,
//     data: {},
//   });
// }
