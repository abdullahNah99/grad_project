import { Link as LinkRouter, useLocation } from "react-router-dom";
import { drawerWidth } from "../utils/constants";
import { mainColors } from "../style/mainColors";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NotificationButton from "../features/orders/NotificationButton";
import LogoutButton from "../features/auth/LogoutButton";

function Appbar() {
  const { pathname } = useLocation();

  if (pathname === "/chat") return;

  return (
    <AppBar
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        bgcolor: mainColors.darkBlue,
      }}
    >
      <Toolbar>
        <span style={{ flexGrow: 1 }}>
          <Link
            component={LinkRouter}
            to="/"
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              color: mainColors.lightYellow,
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              ":hover": {
                fontSize: "18.3px",
              },
            }}
          >
            البغدادي
          </Link>
        </span>

        <NotificationButton />

        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
