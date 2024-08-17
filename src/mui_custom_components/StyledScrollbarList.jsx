import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import List from "@mui/material/List";

function StyledScrollbarList({ children, sx }) {
  return (
    <List
      sx={{
        overflowY: "auto",
        p: 0,
        "&::-webkit-scrollbar": {
          width: "0.5em",
        },
        "&::-webkit-scrollbar-track": {
          bgcolor: alpha(mainColors.mainGrey, 0.3),
          borderRadius: "64px",
        },
        "&::-webkit-scrollbar-thumb": {
          bgcolor: mainColors.lightGrey,
          border: 1,
          borderColor: mainColors.mainGrey,
          borderRadius: "64px",
        },
        ...sx,
      }}
    >
      {children}
    </List>
  );
}

export default StyledScrollbarList;
