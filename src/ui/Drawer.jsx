import { drawerWidth, miniDrawerWidth } from "../utils/constants";
import { mainColors } from "../style/mainColors";
import { useLocation } from "react-router-dom";
import { Drawer as MUIDrawer } from "@mui/material";
import List from "@mui/material/List";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ChatOutlined from "@mui/icons-material/ChatOutlined";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import WidgetsOutlined from "@mui/icons-material/WidgetsOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import Logo from "./Logo";
import DrawerButton from "./DrawerButton";
import DateRange from "@mui/icons-material/DateRange";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import ContentPaste from "@mui/icons-material/ContentPaste";
import SettingsInputComponent from "@mui/icons-material/SettingsInputComponent";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

const drawerList = [
  { icon: <HomeOutlined />, label: "الرئيسية", path: "/home" },
  { icon: <WidgetsOutlined />, label: "المنتجات", path: "/products" },
  { icon: <Person2Outlined />, label: "الفرق", path: "/teams" },
  {
    icon: <TimelineOutlined />,
    label: "الاعمال السابقة",
    path: "/previous-works",
  },
  {
    icon: <DateRange />,
    label: "المواعيد",
    path: "/appointments",
  },
  {
    icon: <SettingsInputComponent />,
    label: "المنظومات الجاهزة",
    path: "/ready-made-systems",
  },
  {
    icon: <ReceiptLong />,
    label: "الفواتير",
    path: "/invoices",
  },
  {
    icon: <ContentPaste />,
    label: "السجلات",
    path: "/records",
  },
  { icon: <ChatOutlined />, label: "المحادثات", path: "/chat" },
  { icon: <SettingsOutlined />, label: "الإغدادات", path: "/settings" },
];

function Drawer() {
  const { pathname } = useLocation();

  return (
    <MUIDrawer
      sx={{
        width: pathname === "/chat" ? miniDrawerWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: pathname === "/chat" ? miniDrawerWidth : drawerWidth,
          boxSizing: "border-box",
          bgcolor: mainColors.lightYellow,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Logo />

      <List>
        {drawerList.map((item) => (
          <DrawerButton key={item.label} item={item} />
        ))}
      </List>
    </MUIDrawer>
  );
}

export default Drawer;
