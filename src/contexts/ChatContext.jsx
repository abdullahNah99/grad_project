import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { getConversationID } from "../utils/helpers";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useAddToMyUsers } from "../features/chat/useAddToMyUsers";
import { useSearchParams } from "react-router-dom";
import { useGetMyUsers } from "../features/chat/useGetMyUsers";
import { useQueryClient } from "@tanstack/react-query";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const queryClient = useQueryClient();
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { addToMyUsers, isLoading: isAddingToMyUsers } = useAddToMyUsers();
  const { refetch: refetchMyUsers, isFetching: isFetchingMyUsers } =
    useGetMyUsers();
  const [searchParams] = useSearchParams();

  useEffect(
    function () {
      const uID = searchParams.get("uid");
      if (!uID) return;
      if (selectedUser && selectedUser.id === uID) return;

      addToMyUsers(
        { uID },
        {
          onSuccess: () => {
            refetchMyUsers().then(() => {
              const myUsers = queryClient.getQueryData(["MyUsers"]);
              setSelectedUser(myUsers.find((user) => user.id === uID));
            });
          },
        }
      );
    },
    [addToMyUsers, searchParams, refetchMyUsers, queryClient, selectedUser]
  );

  useEffect(
    function () {
      if (!selectedUser) return;
      const conversationID = getConversationID(selectedUser.id);

      setIsLoading(true);
      setError("");
      try {
        const q = query(
          collection(db, `chats/${conversationID}/messages`),
          orderBy("sent", "asc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map((doc) => doc.data());
          setMessages(msgs);
        });

        return () => unsubscribe();
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedUser]
  );

  return (
    <ChatContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        isLoading,
        error,
        messages,
        setMessages,
        isAddingToMyUsers,
        isFetchingMyUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined)
    throw new Error("ChatContext was used outside of ChatMessagesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ChatProvider, useChat };
