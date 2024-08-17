import { useSearchParams } from "react-router-dom";
import { appointmentStatuses } from "../utils/constants";
import AppointmentsTable from "../features/appointments/AppointmentsTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Filter from "../ui/Filter";

const filterTypeOptions = [
  { value: "all", label: "الكل" },
  { value: "composition", label: "تركيب" },
  { value: "maintenance", label: "صيانة" },
];
const filterStatusOptions = [
  { value: "all", label: "الكل" },
  { value: "waiting", label: "قيد الانتظار" },
  { value: "detect", label: "قيد الكشف" },
  { value: "execute", label: "قيد التنفيذ" },
  { value: "done", label: "مكتمل" },
];

function AppointmentsPage() {
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get("status") || "all";

  return (
    <Box p={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="initial" fontWeight="bold">
          المواعيد
        </Typography>

        <Box display="flex">
          <Filter
            filterField="status"
            options={filterStatusOptions}
            sx={{ mr: 1 }}
            currentFilterColor={appointmentStatuses[currentStatus]?.color}
            // currentFilterColor={mainColors.mainBlue}
          />
          <Filter filterField="type" options={filterTypeOptions} />
        </Box>
      </Box>

      <AppointmentsTable />
    </Box>
  );
}

export default AppointmentsPage;
