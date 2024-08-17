import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { formatDate, getMonthInArabic } from "../../utils/datesFormats";

function AppointmentDate({ date }) {
  if (!date)
    return (
      <Box width="80px" display="flex" justifyContent="center">
        __
      </Box>
    );

  const { dayNumber, month, year } = formatDate(date);
  return (
    <Tooltip title={date.slice(0, 10)}>
      <Box display="flex" width="80px">
        <Typography variant="body1" mr={0.5}>{`${getMonthInArabic(
          month
        )}  ${year}`}</Typography>
        <Typography variant="body1">{`${dayNumber}`}</Typography>
      </Box>
    </Tooltip>
  );
}

export default AppointmentDate;
