import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TopSoldProductsTooltip({ active, payload, label }) {
  if (active && payload && payload.length)
    return (
      <Box
        sx={{
          bgcolor: mainColors.white,
          p: 1,
          border: 1,
          borderColor: mainColors.lightGrey,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          align="right"
          gutterBottom
          // color={mainColors.darkBlue}
        >
          {label}
        </Typography>

        <Typography variant="body1" color={mainColors.mainBlue} align="right">
          {`الكمية: ${payload[0].value}`}
        </Typography>
      </Box>
    );

  return null;
}

export default TopSoldProductsTooltip;
