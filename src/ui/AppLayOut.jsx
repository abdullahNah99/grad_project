import { Outlet, useLocation } from "react-router-dom";
import { drawerWidth } from "../utils/constants";
import { mainColors } from "../style/mainColors";
import { alpha } from "@material-ui/core";
import Appbar from "./AppBar";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";

function AppLayOut() {
  const { pathname } = useLocation();

  return (
    <>
      <Appbar />

      <Drawer />

      <Box
        sx={{
          ml: pathname !== "/chat" ? `${drawerWidth}px` : null,
          mt: pathname !== "/chat" ? "64px" : null,
          width: pathname !== "/chat" ? `calc(100% - ${drawerWidth}px)` : null,
          height: pathname !== "/chat" ? "calc(100vh - 64px)" : null,
          bgcolor:
            pathname !== "/chat" && pathname !== "/products"
              ? alpha(mainColors.lightGrey, 0.3)
              : null,

          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.7em",
          },
          "&::-webkit-scrollbar-track": {
            bgcolor: alpha(mainColors.darkGrey, 0.3),
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: alpha(mainColors.darkGrey, 0.5),
            border: 1,
            borderColor: mainColors.mainGrey,
            borderRadius: "64px",
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default AppLayOut;
