import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddReadyMadeSystem from "../features/ready_made_systems/AddReadyMadeSystem";
import ReadyMadeSystemsTable from "../features/ready_made_systems/ReadyMadeSystemsTable";

function ReadyMadeSystemsPage() {
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
          المنظومات الجاهزة
        </Typography>

        <AddReadyMadeSystem />
      </Box>

      <ReadyMadeSystemsTable />
    </Box>
  );
}

export default ReadyMadeSystemsPage;
