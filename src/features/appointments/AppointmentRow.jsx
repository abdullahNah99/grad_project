import { capitalize, getOrderType } from "../../utils/helpers";
import { useQueryClient } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import EllipsisText from "../../mui_custom_components/EllipsisText";
import Typography from "@mui/material/Typography";
import AppointmentDate from "./AppointmentDate";
import AppointmentMenu from "./AppointmentMenu";
import AppointmentStatus from "./AppointmentStatus";

function AppointmentRow({ rowData }) {
  const { created_at, end_time, start_time, type_id, user, team_id } = rowData;

  const queryClient = useQueryClient();
  const teams = queryClient.getQueryData(["Teams"])?.team || [];
  const team = teams.find((team) => team_id === team.id);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "30px",
        cursor: "default",
      }}
    >
      <Box display="flex" width="98%" justifyContent="space-between">
        <EllipsisText
          maxWidth="150px"
          sx={{
            fontSize: "18px",
            minWidth: "150px",
            textAlign: "center",
            ml: 0.5,
          }}
        >
          {capitalize(user.name)}
        </EllipsisText>

        <AppointmentDate date={created_at} />

        <Typography
          variant="body1"
          sx={{ fontSize: "18px", pl: 5, fontWeight: 500 }}
        >
          {getOrderType(type_id).split(" ")[1]}
        </Typography>

        <EllipsisText
          maxWidth="150px"
          sx={{ fontSize: "18px", minWidth: "150px", textAlign: "center" }}
        >
          {capitalize(team?.name) ||
            "Team Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
        </EllipsisText>

        <AppointmentDate date={start_time} />

        <AppointmentDate date={end_time} />

        <AppointmentStatus appointment={rowData} />
      </Box>
      <Box ml={3}>
        <AppointmentMenu appointment={rowData} />
      </Box>
    </Box>
  );
}

export default AppointmentRow;
