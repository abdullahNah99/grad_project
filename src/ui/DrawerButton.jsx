import { Link, useLocation } from "react-router-dom";
import { mainColors } from "../style/mainColors";
import { alpha } from "@material-ui/core";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function DrawerButton({ item }) {
  const { pathname } = useLocation();

  return (
    <ListItem
      disablePadding={true}
      sx={{
        px: pathname === "/chat" ? null : 1,
        mb: pathname === "/chat" ? 1.5 : 0.5,
        justifyContent: "center",
      }}
    >
      <Link
        to={item.path}
        style={{
          textDecoration: "none",
          flexGrow: pathname === "/chat" ? null : 1,
          color: mainColors.darkBlue,
        }}
      >
        {pathname === "/chat" ? (
          <Tooltip title={item.label} disableInteractive>
            <IconButton
              onClick={() => {}}
              sx={{
                borderRadius: "8px",
                bgcolor: pathname.includes(item.path)
                  ? alpha(mainColors.darkYellow, 0.5)
                  : null,
                ":hover": {
                  bgcolor: pathname.includes(item.path)
                    ? alpha(mainColors.darkYellow, 0.5)
                    : alpha(mainColors.lightGrey, 0.3),
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ) : (
          <ListItemButton
            sx={{
              borderRadius: "8px",
              bgcolor: pathname.includes(item.path)
                ? alpha(mainColors.darkYellow, 0.5)
                : null,
              ":hover": {
                bgcolor: pathname.includes(item.path)
                  ? alpha(mainColors.darkYellow, 0.5)
                  : alpha(mainColors.lightGrey, 0.3),
              },
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  item.path === pathname
                    ? mainColors.darkOrange
                    : mainColors.darkBlue,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: item.path === pathname ? "17px" : null,
                  // fontWeight: item.path === pathname ? "600" : null,
                },
              }}
            />
          </ListItemButton>
        )}
      </Link>
    </ListItem>
  );
}

export default DrawerButton;
