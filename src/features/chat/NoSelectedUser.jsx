import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function NoSelectedUser() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: alpha(mainColors.lightBlue, 0.5),
          py: 0.3,
          px: 2,
          borderRadius: "32px",
          position: "absolute",
          border: 1,
          borderColor: mainColors.mainBlue,
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: mainColors.mainBlue, fontSize: "18px", mb: 0.3 }}
        >
          يرجى اختيار محادثة من أجل البدء
        </Typography>
      </Box>
    </Box>
  );
}

export default NoSelectedUser;
