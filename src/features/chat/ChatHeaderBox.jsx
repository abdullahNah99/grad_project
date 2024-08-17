import { capitalize } from "../../utils/helpers";
import { useChat } from "../../contexts/ChatContext";
import { alpha } from "@material-ui/core";
import { formatDate, getDateInfo } from "../../utils/datesFormats";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import UserAvatar from "./UserAvatar";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import AddTeamToChatButton from "./AddTeamToChatButton";

const sx = {
  width: "100%",
  height: "64px",
  // bgcolor: mainColors.darkBlue,
  bgcolor: alpha(mainColors.lightBlue, 0.1),
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function ChatHeaderBox() {
  const { selectedUser } = useChat();

  return (
    <Box sx={sx}>
      {!selectedUser && (
        <Box display="flex" justifyContent="space-between" mx={2} width="100%">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "22px",
              color: mainColors.darkBlue,
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              cursor: "default",
              ":hover": {
                fontSize: "22.3px",
              },
            }}
          >
            البغدادي
          </Typography>

          <IconButton
            onClick={() => {
              // createAdminUserInFirestore();
              console.log(getDateInfo("10-10-2024T12:00PM"));
            }}
          >
            <MoreHoriz sx={{ color: mainColors.darkBlue }} />
          </IconButton>
        </Box>
      )}
      {selectedUser && (
        <>
          <Box sx={{ display: "flex", ml: 2 }}>
            <UserAvatar
              userName={selectedUser?.name}
              isOnline={selectedUser?.is_online}
            />

            <Box>
              <Typography variant="body1" color="initial" fontWeight={600}>
                {capitalize(selectedUser?.name)}
              </Typography>

              <Typography variant="body2" color={mainColors.darkGrey}>
                {selectedUser?.is_online
                  ? "متصل الآن"
                  : `${formatDate(
                      parseInt(selectedUser?.last_active)
                    ).formattedDate.slice(-8)} آخر ظهور`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mr={2}>
            <AddTeamToChatButton />

            <IconButton onClick={() => {}}>
              <MoreHoriz sx={{ color: mainColors.darkBlue }} />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ChatHeaderBox;
