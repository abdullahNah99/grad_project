import { mainColors } from "../style/mainColors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Status({ status, sx = {} }) {
  return (
    <Box
      sx={{
        px: 3,
        py: 0.3,
        borderRadius: "32px",
        width: "64px",
        display: "flex",
        justifyContent: "center",
        bgcolor: status ? mainColors.lightBlue : mainColors.darkOrange,
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: mainColors.white,
          fontWeight: "bold",
          mb: 0.1,
        }}
      >
        {status ? "متاح" : "غير متاح"}
      </Typography>
    </Box>
  );
}

export default Status;
