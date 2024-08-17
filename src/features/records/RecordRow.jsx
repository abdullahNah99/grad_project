import { capitalize } from "../../utils/helpers";
import Box from "@mui/material/Box";
import EllipsisText from "../../mui_custom_components/EllipsisText";
import Typography from "@mui/material/Typography";
import AppointmentDate from "../appointments/AppointmentDate";
import RecordMenu from "./RecordMenu";

function RecordRow({ rowData }) {
  const {
    user: { name, phone },
    order: { location },
    created_at,
  } = rowData;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "30px",
      }}
    >
      <Box display="flex" width="98%" justifyContent="space-between">
        <EllipsisText
          maxWidth="150px"
          sx={{ fontSize: "18px", minWidth: "150px", textAlign: "center" }}
        >
          {capitalize(name)}
        </EllipsisText>

        <Typography variant="body1" sx={{ fontSize: "18px" }}>
          {phone}
        </Typography>

        <EllipsisText
          maxWidth="200px"
          align="right"
          sx={{ fontSize: "18px", minWidth: "200px", textAlign: "center" }}
        >
          {location}
        </EllipsisText>

        <AppointmentDate date={created_at} />
      </Box>
      <Box ml={3}>
        <RecordMenu record={rowData} />
      </Box>
    </Box>
  );
}

export default RecordRow;
