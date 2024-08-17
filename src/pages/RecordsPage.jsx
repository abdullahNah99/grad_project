import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RecordsTable from "../features/records/RecordsTable";

function RecordsPage() {
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
          السجلات
        </Typography>
      </Box>

      <RecordsTable />
    </Box>
  );
}

export default RecordsPage;
