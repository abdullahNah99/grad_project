import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import { getDateInfo } from "../../utils/datesFormats";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function InvoiceDate({ date }) {
  const { dayInArabic, dayNumber, monthNumber, year } = getDateInfo(date);
  return (
    <Box
      sx={{
        display: "flex",
        height: "32px",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: alpha(mainColors.darkGrey, 0.5), mr: 1 }}
      >
        {dayInArabic
          ? `${dayInArabic} ${dayNumber}-${monthNumber}-${year}`
          : date}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: alpha(mainColors.darkGrey, 0.7),
          fontSize: "18px",
        }}
      >
        {":التاريخ"}
      </Typography>
    </Box>
  );
}

export default InvoiceDate;
