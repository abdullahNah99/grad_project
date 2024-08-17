import { useChat } from "../../contexts/ChatContext";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import NoSelectedUser from "./NoSelectedUser";
import MessagesList from "./MessagesList";

function ChatMessagesBox({ listRef }) {
  const { selectedUser } = useChat();

  return (
    <Box
      sx={{
        mt: "64px",
        px: 0.5,
        height: "calc(100vh - 129px)",
        flexGrow: 1,
        bgcolor: mainColors.lightGrey,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!selectedUser && <NoSelectedUser />}

      {selectedUser && <MessagesList listRef={listRef} />}
    </Box>
  );
}

export default ChatMessagesBox;
