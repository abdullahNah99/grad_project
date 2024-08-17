// import { useQuery } from "@tanstack/react-query";
// import { getConversationMessages } from "../../services/apiChat";
// import { useChat } from "../../contexts/ChatContext";

// export function useGetConversationMessages() {
//   const { selectedUser, setMessages } = useChat();

//   const {
//     isLoading,
//     error,
//     data: messages,
//     refetch,
//   } = useQuery({
//     queryKey: ["Chat", selectedUser?.id],
//     queryFn: () =>
//       getConversationMessages({
//         receiverID: selectedUser?.id,
//         setMessages: (messages) => setMessages(messages),
//       }),
//   });

//   return { isLoading, error, messages, refetch };
// }
