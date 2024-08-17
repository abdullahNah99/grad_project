import { mainColors } from "../style/mainColors";
import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";

const ITEM_HEIGHT = 48;

function CustomSelect({ options = ["option 1", "option 2", "option 3"] }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);

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
    setSelected(option);
  }

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          bgcolor: alpha(mainColors.lightGrey, 0.3),
          cursor: "pointer",
          p: 1,
          borderRadius: "16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          fontSize="18px"
          mx={1}
          color={mainColors.darkBlue}
        >
          {selected ? selected : options[0]}
        </Typography>

        <KeyboardArrowDown sx={{ color: mainColors.darkBlue }} />
      </Box>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ maxHeight: ITEM_HEIGHT * 7 }}
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
              key={option}
              selected={option === "Pyxis"}
              onClick={(e) => handleOptionSelected(e, option)}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: "17px", color: mainColors.darkBlue }}
              >
                {option}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default CustomSelect;
