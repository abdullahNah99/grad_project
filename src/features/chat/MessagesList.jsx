import { useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";
import List from "@mui/material/List";
import ChatMessage from "./ChatMessage";
import Loader from "../../ui/Loader";

function MessagesList({ listRef }) {
  const { messages, isLoading, error } = useChat();

  useEffect(
    function () {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    },
    [listRef, messages]
  );

  if (!error)
    return (
      <>
        {isLoading && <Loader />}

        {!isLoading && (
          <List
            ref={listRef}
            style={{
              maxHeight: "97%",
              overflow: "auto",
              "&::WebkitScrollbar": {
                width: 0,
                height: 0,
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {messages?.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </List>
        )}
      </>
    );
}

export default MessagesList;
