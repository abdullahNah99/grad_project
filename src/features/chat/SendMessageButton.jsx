import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import SendOutlined from "@mui/icons-material/SendOutlined";

function SendMessageButton() {
  return (
    <Box
      component="button"
      type="submit"
      sx={{
        width: "40px",
        height: "40px",
        bgcolor: mainColors.darkBlue,
        borderRadius: "8px",
        ml: 1.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <SendOutlined sx={{ color: mainColors.white }} />
    </Box>
  );
}

export default SendMessageButton;
