import { useGetMyUsers } from "./useGetMyUsers";
import { chatSideBarWidth, miniDrawerWidth } from "../../utils/constants";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SearchTextField from "./SearchTextField";
import ChatUser from "./ChatUser";
import LoadingChatUser from "./LoadingChatUser";

function ChatSideBarBox() {
  const { error, isLoading, myUsers } = useGetMyUsers();

  return (
    <>
      {/* {isLoading && <Loader />} */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: chatSideBarWidth,
          height: "100vh",
          ml: `${miniDrawerWidth}px`,
          borderRight: 1,
          borderRightColor: mainColors.lightBlue,
          bgcolor: alpha(mainColors.lightBlue, 0.1),
          px: 1,
        }}
      >
        <Box
          sx={{
            py: 2,
            px: 1,
            flex: "0 0 auto",
          }}
        >
          <Typography variant="h4" color="initial" gutterBottom>
            المحادثات
          </Typography>

          <SearchTextField />
        </Box>

        {!error && (
          <Box
            sx={{
              flex: "1 1 auto",
              overflow: "auto",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <List>
              {isLoading &&
                Array.from({ length: 3 }).map((_, index) => (
                  <LoadingChatUser key={index} />
                ))}

              {!isLoading &&
                myUsers?.map((user, index) => (
                  <ChatUser key={index} user={user} />
                ))}
            </List>
          </Box>
        )}
      </Box>
    </>
  );
}

export default ChatSideBarBox;
