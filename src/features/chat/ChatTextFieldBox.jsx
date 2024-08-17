import { useState } from "react";
import { useChat } from "../../contexts/ChatContext";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import { useSendMessage } from "./useSendMessage";
import { sendNotification } from "../../services/apiNotification";
import Box from "@mui/material/Box";
import ChatTextField from "./ChatTextField";
import SendMessageButton from "./SendMessageButton";

const sx = {
  width: "98%",
  bgcolor: alpha(mainColors.white, 0.3),
  borderTop: 1,
  borderTopColor: mainColors.mainGrey,
  display: "flex",
  mt: "auto",
  justifyContent: "center",
  py: 1.5,
  px: 1,
};

function ChatTextFieldBox({ listRef }) {
  const { sendMessage } = useSendMessage();
  const { selectedUser, setMessages } = useChat();
  const [message, setMessage] = useState("");

  if (!selectedUser) return;

  function handleSendMessage(e) {
    e.preventDefault();
    if (!message) return;

    sendMessage(
      { receiverID: selectedUser.id, message },
      {
        onSuccess: () => {
          if (selectedUser?.push_token)
            sendNotification({
              notification: message,
              pushToken: selectedUser.push_token,
            });
          setMessage("");
          setMessages((messages) => [...messages, message]);
          if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
          }
        },
      }
    );
  }

  return (
    <Box component="form" onSubmit={handleSendMessage} sx={sx}>
      <ChatTextField {...{ message, setMessage }} />

      <SendMessageButton />
    </Box>
  );
}

export default ChatTextFieldBox;
