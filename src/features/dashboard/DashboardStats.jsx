import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import StatItem from "./StatItem";
import CurrentUsers from "./CurrentUsers";
import RecordVoiceOverOutlined from "@mui/icons-material/RecordVoiceOverOutlined";
import EngineeringOutlined from "@mui/icons-material/EngineeringOutlined";
import TaskAltOutlined from "@mui/icons-material/TaskAltOutlined";

function DashboardStats() {
  const items = [
    // {
    //   bgcolor: mainColors.lightBlue,
    //   color: mainColors.darkBlue,
    //   borderColor: alpha(mainColors.darkBlue, 0.2),
    //   title: "المستخدمين الحاليين",
    //   content: 250,
    // },
    {
      bgcolor: mainColors.lightYellow,
      color: mainColors.darkBlue,
      borderColor: alpha(mainColors.darkYellow, 0.2),
      title: "المستخدمين النشطين",
      content: 50,
      icon: (
        <RecordVoiceOverOutlined
          sx={{ fontSize: "40px", color: mainColors.darkBlue }}
        />
      ),
    },
    {
      bgcolor: alpha(mainColors.lightOrange, 0.7),
      color: mainColors.darkBlue,
      borderColor: alpha(mainColors.darkOrange, 0.2),
      title: "الأعمال قيد التنفيذ",
      content: 5,
      icon: (
        <EngineeringOutlined
          sx={{ fontSize: "40px", color: mainColors.darkBlue }}
        />
      ),
    },
    {
      bgcolor: mainColors.lightGrey,
      color: mainColors.darkBlue,
      borderColor: alpha(mainColors.darkGrey, 0.2),
      title: "المشاريع المكتملة",
      content: 25,
      icon: (
        <TaskAltOutlined
          sx={{ fontSize: "40px", color: mainColors.darkBlue }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <CurrentUsers />
      {items.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </Box>
  );
}

export default DashboardStats;
