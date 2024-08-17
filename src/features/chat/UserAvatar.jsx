import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function UserAvatar({ userName, isOnline = false, sx }) {
  return (
    <Box sx={{ position: "relative", display: "inline-block", mr: 2, ...sx }}>
      <Avatar
        sx={{
          color: mainColors.white,
          bgcolor: mainColors.darkBlue,
          width: 50,
          height: 50,
        }}
      >
        {userName?.charAt(0).toUpperCase() ?? "X"}
      </Avatar>

      {isOnline && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: -3,
            width: 12,
            height: 12,
            bgcolor: "green",
            border: "2px solid white",
            borderRadius: "50%",
          }}
        />
      )}
    </Box>
  );
}

export default UserAvatar;
