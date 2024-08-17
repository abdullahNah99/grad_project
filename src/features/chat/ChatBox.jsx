import { chatSideBarWidth, miniDrawerWidth } from "../../utils/constants";
import Box from "@mui/material/Box";
import ChatTextFieldBox from "./ChatTextFieldBox";
import ChatHeaderBox from "./ChatHeaderBox";
import ChatMessagesBox from "./ChatMessagesBox";
import { useRef } from "react";

const sx = {
  width: `calc(100% - ${chatSideBarWidth + miniDrawerWidth}px)`,
  height: "100vh",
  display: "flex",
  position: "relative",
  flexDirection: "column",
};

function ChatBox() {
  const listRef = useRef();

  return (
    <Box sx={sx}>
      <ChatHeaderBox />

      <ChatMessagesBox listRef={listRef} />

      <ChatTextFieldBox listRef={listRef} />
    </Box>
  );
}

export default ChatBox;
