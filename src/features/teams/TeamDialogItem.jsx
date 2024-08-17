import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserAvatar from "../chat/UserAvatar";
import { capitalize } from "../../utils/helpers";
import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

function TeamDialogItem({ team, selected, onClick }) {
  const { name, email, phone } = team;

  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        bgcolor: !selected
          ? alpha(mainColors.lightGrey, 0.3)
          : mainColors.lightBlue,
        mr: 1,
        mb: 1,
        borderRadius: "8px",
        ":hover": {
          bgcolor: !selected
            ? alpha(mainColors.lightGrey, 0.5)
            : mainColors.lightBlue,
        },
      }}
    >
      <UserAvatar userName={name} />
      <Typography variant="h6" color="initial" flexGrow={1} fontWeight={600}>
        {capitalize(name)}
      </Typography>
      <Box>
        <Box display="flex">
          <EmailOutlined sx={{ fontSize: "18px", mr: 1 }} />
          <Typography variant="body2" sx={{ color: mainColors.darkGrey }}>
            {email}
          </Typography>
        </Box>

        <Box display="flex">
          <PhoneOutlined sx={{ fontSize: "18px", mr: 1 }} />
          <Typography variant="body2" sx={{ color: mainColors.darkGrey }}>
            {phone}
          </Typography>
        </Box>
      </Box>
    </ListItemButton>
  );
}

export default TeamDialogItem;
