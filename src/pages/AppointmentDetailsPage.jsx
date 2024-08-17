import { useQueryClient } from "@tanstack/react-query";
import { useGetAllAppointments } from "../features/appointments/useGetAllAppointments";
import { appointmentStatuses, BASE_URL } from "../utils/constants";
import { getAppointmentActiveStep } from "../utils/helpers";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import CustomizedSteppers from "../ui/CustomizedSteppers";
import QueryStats from "@mui/icons-material/QueryStats";
import Engineering from "@mui/icons-material/Engineering";
import TaskAlt from "@mui/icons-material/TaskAlt";
import HourglassTop from "@mui/icons-material/HourglassTop";
import AppointmentsProducts from "../features/appointments/AppointmentsProducts";
import Loader from "../ui/Loader";
import AppointmentDetails from "../features/appointments/AppointmentDetails";
import NetworkImage from "../ui/NetworkImage";
import Typography from "@mui/material/Typography";

const steps = [
  {
    icon: <HourglassTop />,
    color: appointmentStatuses.waiting.color,
    label: "انتظار",
  },
  {
    icon: <QueryStats />,
    color: appointmentStatuses.detect.color,
    label: "قيد الكشف",
  },
  {
    icon: <Engineering />,
    color: appointmentStatuses.execute.color,
    label: "قيد التنفيذ",
  },
  { icon: <TaskAlt />, color: appointmentStatuses.done.color, label: "مكتمل" },
];

function AppointmentDetailsPage() {
  const queryClient = useQueryClient();
  const appointments = queryClient.getQueryData(["Appointments"])?.appointment;
  const { isLoading, refetch } = useGetAllAppointments();
  const { appointmentID: id } = useParams();

  if (!appointments) refetch();

  if (isLoading) return <Loader />;

  const appointment = appointments.find((app) => Number(app.id) === Number(id));
  console.log(appointment);

  const {
    order: { products, type_id, desc, image },
  } = appointment;

  return (
    <Box mt={2}>
      <CustomizedSteppers
        steps={steps}
        activeStep={getAppointmentActiveStep(appointment)}
      />

      {type_id === 3 && (
        <Box sx={{ display: "flex", height: "25%" }}>
          <Typography variant="body1">{desc}</Typography>

          <NetworkImage
            src={`${BASE_URL.split("/api")[0]}/${image}`}
            sx={{ height: "100%" }}
          />
        </Box>
      )}

      {type_id === 2 && <AppointmentsProducts {...{ products }} />}

      <AppointmentDetails appointment={appointment} />
    </Box>
  );
}

export default AppointmentDetailsPage;
