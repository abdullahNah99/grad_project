import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProjectsTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { color, label, value } = payload[0].payload.payload;

    return (
      <Box
        sx={{
          bgcolor: mainColors.white,
          p: 1.2,
          border: 1,
          borderColor: mainColors.lightGrey,
          borderRadius: "8px",
        }}
      >
        <Typography variant="body1" color={color} align="right">
          {`${label}: ${value}`}
        </Typography>
      </Box>
    );
  }

  return null;
}

export default ProjectsTooltip;
