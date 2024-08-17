import { getAppointmentStatusInArabic } from "../../utils/helpers";
import { mainColors } from "../../style/mainColors";
import { appointmentStatuses } from "../../utils/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

function AppointmentStatus({ appointment, sx = {} }) {
  const { status_id, start_time } = appointment;
  const isWaiting =
    status_id === 1 ||
    (status_id === 2 && dayjs(new Date()).isBefore(dayjs(start_time)));

  return (
    <Box
      sx={{
        px: 3,
        py: 0.3,
        borderRadius: "32px",
        width: "84px",
        display: "flex",
        justifyContent: "center",
        bgcolor: isWaiting
          ? appointmentStatuses.waiting.color
          : Object.values(appointmentStatuses)[status_id - 1].color,
        ...sx,
      }}
    >
      <Typography
        align="center"
        sx={{
          color: mainColors.white,
          fontWeight: "bold",
          mb: 0.1,
        }}
      >
        {isWaiting
          ? "قيد الانتظار"
          : getAppointmentStatusInArabic(appointment.status_id)}
      </Typography>
    </Box>
  );
}

export default AppointmentStatus;
