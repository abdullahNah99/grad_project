import { mainColors } from "../../style/mainColors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProductAmount({ amount, size, top, right }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: top ?? -3,
        right: right ?? 0,
        width: size ?? 20,
        height: size ?? 20,
        bgcolor: mainColors.darkOrange,
        border: "1px solid white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        alignItems="center"
        sx={{
          color: mainColors.white,
          position: "static",
          fontSize: "14px",
        }}
      >
        {amount}
      </Typography>
    </Box>
  );
}

export default ProductAmount;
