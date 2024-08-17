import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectMonth from "../../ui/SelectMonth";
import TopSoldProductsTooltip from "./TopSoldProductsTooltip";

const data = [
  { name: "Batteryasdafs 1", amount: 10 },
  { name: "Batteryasdasf 2", amount: 1 },
  { name: "Battery 3", amount: 100 },
  { name: "Battery 4", amount: 25 },
  { name: "Battery 5", amount: 44 },
];

function TopSoldProductsChart() {
  return (
    <Box
      sx={{
        bgcolor: mainColors.white,
        border: 1,
        borderColor: alpha(mainColors.mainGrey, 0.7),
        borderRadius: "16px",
        width: "66%",
        height: "230px",
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box display="flex" justifyContent="right" alignItems="center" mb={1.5}>
        <SelectMonth />

        <Typography
          variant="h5"
          align="right"
          color={mainColors.darkBlue}
          ml={2}
        >
          أكثر المنتجات مبيعا
        </Typography>
      </Box>

      <ResponsiveContainer>
        <ComposedChart layout="vertical" data={data}>
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            scale="band"
            width={1}
            tick={false}
            tickLine={false}
          />
          <Tooltip cursor={false} content={<TopSoldProductsTooltip />} />
          <Bar dataKey="amount" barSize={10} fill={mainColors.lightBlue} />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TopSoldProductsChart;
