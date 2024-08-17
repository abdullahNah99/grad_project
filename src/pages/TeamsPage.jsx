import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TeamsTable from "../features/teams/TeamsTable";
import AddTeamForm from "../features/teams/AddTeamForm";

function TeamsPage() {
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
          كل الفرق
        </Typography>

        <AddTeamForm />
      </Box>

      <TeamsTable />
    </Box>
  );
}

export default TeamsPage;
