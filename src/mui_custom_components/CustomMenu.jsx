import { mainColors } from "../style/mainColors";
import { useState } from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;

function CustomMenu({ options, actions, children }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  function handleClick(e) {
    e?.stopPropagation?.();
    setAnchorEl(e.currentTarget);
  }

  function handleClose(e) {
    e?.stopPropagation?.();
    setAnchorEl(null);
  }

  function handleOptionSelected(e, option) {
    e?.stopPropagation?.();
    handleClose();
    actions?.[option.action]?.();
  }

  return (
    <div>
      <IconButton
        size="small"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ pointerEvents: "auto" }}
      >
        {children ?? <MoreVert />}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options?.map((option) => {
          return (
            <MenuItem
              key={option.label}
              selected={option === "Pyxis"}
              onClick={(e) => handleOptionSelected(e, option)}
            >
              {option.icon}
              <Typography
                variant="body1"
                sx={{ fontSize: "17px", color: mainColors.darkBlue }}
              >
                {option.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default CustomMenu;
