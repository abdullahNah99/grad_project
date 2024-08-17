import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";

function YearFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "32px",
        p: 0.5,
        bgcolor: mainColors.white,
        borderRadius: "8px",
        border: 1,
        borderColor: mainColors.lightGrey,
      }}
    ></Box>
  );
}

export default YearFilter;
