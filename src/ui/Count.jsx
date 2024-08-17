import Box from "@mui/material/Box";
import { mainColors } from "../style/mainColors";

function Count() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 2,
        right: 10,
        width: 30,
        height: 30,
        bgcolor: mainColors.darkOrange,
        border: "1px solid white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: mainColors.white,
      }}
    >
      99
    </Box>
  );
}

export default Count;
