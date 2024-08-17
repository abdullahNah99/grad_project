import { useChat } from "../contexts/ChatContext";
import Box from "@mui/material/Box";
import ChatSideBarBox from "../features/chat/ChatSideBarBox";
import ChatBox from "../features/chat/ChatBox";
import Loader from "../ui/Loader";

function ChatPage() {
  const { isAddingToMyUsers, isFetchingMyUsers } = useChat();
  const isLoading = isAddingToMyUsers || isFetchingMyUsers;

  return (
    <>
      {isLoading && <Loader />}

      <Box display="flex">
        <ChatSideBarBox />

        <ChatBox />
      </Box>
    </>
  );
}

export default ChatPage;
