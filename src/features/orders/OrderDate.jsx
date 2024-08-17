import { getFullDateInArabic } from "../../utils/helpers";
import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import DateRange from "@mui/icons-material/DateRange";

function OrderDate({ date }) {
  return (
    <Card
      sx={{
        display: "flex",
        bgcolor: alpha(mainColors.lightBlue, 0.5),
        p: 1,
        borderRadius: "12px",
        maxHeight: "32px",
      }}
    >
      <DateRange sx={{ mr: 1 }} />
      <Typography variant="body1" color="initial">
        {getFullDateInArabic(date)}
      </Typography>
    </Card>
  );
}

export default OrderDate;
