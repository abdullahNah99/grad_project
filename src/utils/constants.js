import { mainColors } from "../style/mainColors";

export const drawerWidth = 240;

export const miniDrawerWidth = 60;

export const chatSideBarWidth = 290;

export const BASE_URL = "http://127.0.0.1:8000/api";
// export const BASE_URL = "http://192.168.43.37:8000/api";

export const SERVER_KEY =
  "AAAAWCy6bmA:APA91bHxodG-iTXZbG08B_UwW5XuRN_7IAfhwd3MrR279cMZ2naNmE2_qBgPtky0wh6K9iG7C4DbLvYXIM9kB6DnqLmaGUuRzOOJ6Y7tQ6q92V3kNyE3T8VW_Ed1g3_t60FMH6dRI1yV";

export const PAGE_SIZE = 7;

export const productCategories = {
  panel: 1,
  battery: 2,
  inverter: 3,
};

export const appointmentStatuses = {
  waiting: { id: 1, color: mainColors.mainBlue },
  detect: { id: 2, color: mainColors.mainYellow },
  execute: { id: 3, color: mainColors.darkBlue },
  done: { id: 4, color: mainColors.darkGreen },
};

export const batteryTypes = {
  lithium: 1,
  tubular: 2,
};

export const CO_PHONE = "0991112070";
export const CO_EMAIL = "info@aec-sy.com";
