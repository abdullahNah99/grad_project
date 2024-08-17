import { getMonthInArabic } from "../../utils/datesFormats";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SalesTooltip({ active, payload, label }) {
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
          //   color={mainColors.darkBlue}
        >
          {getMonthInArabic(label)}
        </Typography>

        <Typography variant="body1" color={mainColors.mainGreen} align="right">
          {`اجمالي المبيعات: ${payload[0].value}`}
        </Typography>
      </Box>
    );

  return null;
}

export default SalesTooltip;
