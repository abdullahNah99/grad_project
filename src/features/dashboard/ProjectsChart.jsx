import { appointmentStatuses } from "../../utils/constants";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectsTooltip from "./ProjectsTooltip";

const data = [
  { label: "انتظار", value: 10, color: appointmentStatuses.waiting.color },
  { label: "قيد الكشف", value: 2, color: appointmentStatuses.detect.color },
  { label: "قيد التنفيذ", value: 5, color: appointmentStatuses.execute.color },
  // { label: "مكتمل", value: 20, color: alpha(mainColors.darkGreen, 0.8) },
];

function ProjectsChart() {
  return (
    <Box
      sx={{
        bgcolor: mainColors.white,
        border: 1,
        borderColor: alpha(mainColors.mainGrey, 0.7),
        borderRadius: "16px",
        width: "33%",
        height: "230px",
        p: 1,
        mr: 1,
      }}
    >
      <Box display="flex" justifyContent="right">
        <Typography
          variant="h5"
          align="right"
          color={mainColors.darkBlue}
          ml={2}
        >
          الأعمال
        </Typography>
      </Box>

      <ResponsiveContainer width="100%" height="86%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            // innerRadius={60}
            outerRadius={75}
            cx="35%"
            cy="45%"
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<ProjectsTooltip />} />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ProjectsChart;
