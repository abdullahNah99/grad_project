import { formatDate } from "../../utils/datesFormats";
import { capitalize } from "../../utils/helpers";
import { localStorageInstance } from "../../utils/localStorageProvider";
import { useGetLastMessage } from "./useGetLastMessage";
import { useChat } from "../../contexts/ChatContext";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import EllipsisText from "../../mui_custom_components/EllipsisText";
import UserAvatar from "./UserAvatar";
import LoadingChatUser from "./LoadingChatUser";

function ChatUser({ user }) {
  const { name, id } = user;
  const { error, isLoading, lastMessageObj, refetch } = useGetLastMessage({
    receiverID: id,
  });
  const { selectedUser, setSelectedUser } = useChat();
  const selected = selectedUser?.id === user.id;

  if (isLoading) return <LoadingChatUser />;
  const { msg, type, sent, fromId, read } = lastMessageObj;
  const notReadYet = !selected && fromId !== localStorageInstance.uid && !read;

  if (error) {
    refetch();
    console.log("refetching last message");
  }

  if (!error)
    return (
      <ListItem
        onClick={() => setSelectedUser(user)}
        disablePadding
        sx={{
          mb: 2,
          bgcolor: selected
            ? mainColors.lightBlue
            : alpha(mainColors.white, 0.5),
          borderRadius: "16px",
        }}
      >
        <ListItemButton
          disableRipple={selected}
          disableGutters
          sx={{ width: "100%", height: "100%", borderRadius: "16px", pl: 1 }}
        >
          <Box
            display="flex"
            sx={{ width: "100%", height: "100%", alignItems: !msg && "center" }}
          >
            <UserAvatar
              userName={name}
              isOnline={user.is_online}
              sx={{ mr: 1 }}
            />

            <Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "space-between",
                  width: "210px",
                }}
              >
                <EllipsisText
                  sx={{ fontWeight: 600, fontSize: !msg && "20px" }}
                >
                  {capitalize(name)}
                </EllipsisText>

                <Typography
                  variant="body2"
                  sx={{
                    color: notReadYet && mainColors.mainBlue,
                    fontWeight: notReadYet && 600,
                    fontSize: "12px",
                  }}
                >
                  {sent && formatDate(parseInt(sent)).formattedDate.slice(-8)}
                </Typography>
              </Box>

              {msg && (
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    width: "210px",
                  }}
                >
                  <EllipsisText
                    sx={{ fontSize: "14px", color: mainColors.darkGrey }}
                  >
                    {type === "text" ? msg : "Image"}
                  </EllipsisText>

                  {notReadYet && (
                    <Box
                      sx={{
                        borderRadius: "128px",
                        width: "20px",
                        height: "20px",
                        bgcolor: mainColors.mainBlue,
                        mr: 2,
                      }}
                    />
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </ListItemButton>
      </ListItem>
    );
}

export default ChatUser;
