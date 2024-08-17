import { mainColors } from "../../style/mainColors";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomSelect from "../../mui_custom_components/CustomSelect";
import SalesTooltip from "./SalesTooltip";

const data = [
  {
    date: "Jan",
    total: 10000000,
  },
  {
    date: "Feb",
    total: 20000000,
  },
  {
    date: "Mar",
    total: 30000000,
  },
  {
    date: "Apr",
    total: 40000000,
  },
  {
    date: "May",
    total: 50000000,
  },
  {
    date: "Jun",
    total: 20000000,
  },
  {
    date: "Jul",
    total: 70000000,
  },
  {
    date: "Aug",
    total: 80000000,
  },
  {
    date: "Sep",
    total: 9000000,
  },
  {
    date: "Oct",
    total: 100000000,
  },
  {
    date: "Nov",
    total: 110000000,
  },
  {
    date: "Dec",
    total: 1200000,
  },
].map((item) => ({ ...item, total: item.total / 1000000 }));

function SalesChart() {
  return (
    <Box
      sx={{
        bgcolor: mainColors.white,
        border: 1,
        borderColor: alpha(mainColors.mainGrey, 0.7),
        borderRadius: "16px",
        width: "98.2%",
        height: "260px",
        p: 1,
        mb: 2.3,
        ml: 0.5,
      }}
    >
      <Box display="flex" justifyContent="right" alignItems="center" mb={2}>
        <CustomSelect
          options={[
            "هذه السنة",
            "2023 سنة",
            "2022 سنة",
            "2021 سنة",
            "2020 سنة",
          ]}
        />

        <Typography
          variant="h5"
          align="right"
          color={mainColors.darkBlue}
          ml={2}
        >
          المبيعات
        </Typography>
      </Box>

      <ResponsiveContainer width="99%" height="83%">
        <AreaChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fill: mainColors.darkBlue }}
            tickLine={{ stroke: mainColors.darkGreen }}
          />
          <YAxis
            unit="M SYP"
            width={80}
            tick={{ fill: mainColors.darkBlue }}
            tickLine={{ stroke: mainColors.darkGreen }}
          />
          <CartesianGrid />
          <Tooltip content={<SalesTooltip />} />
          <Area
            dataKey="total"
            type="monotone"
            stroke={mainColors.darkGreen}
            fill={mainColors.lightGreen}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default SalesChart;
