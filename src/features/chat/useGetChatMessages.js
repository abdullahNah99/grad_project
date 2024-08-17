// import { useQueryClient } from "@tanstack/react-query";
// import {
//   collection,
//   doc,
//   onSnapshot,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import { useEffect } from "react";
// import { db } from "../../firebase/firebaseConfig";
// import { getConversationID } from "../../utils/helpers";

// export function useGetChatMessages({ receiverID }) {
//   const queryClient = useQueryClient();

//   const conversationID = getConversationID(receiverID);

//   useEffect(
//     function () {
//       const documentRef = doc(db, "chats", conversationID);

//       const subCollectionRef = collection(documentRef, "messages");
//       const q = query(subCollectionRef, orderBy("sent"));

//       const unsubscribe = onSnapshot(q, (snapshot) => {
//         const messages = snapshot.docs.map((doc) => ({ ...doc.data() }));
//         queryClient.setQueryData("chatMessages", messages);
//       });

//       return () => unsubscribe();
//     },
//     [conversationID, queryClient]
//   );

//   return queryClient.getQueryData("chatMessages") || [];
// }
