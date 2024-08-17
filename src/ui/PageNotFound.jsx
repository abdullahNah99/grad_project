import { alpha, Typography } from "@mui/material";
import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";

const parentBoxSx = {
  width: "100%",
  height: "100vh",
  bgcolor: alpha(mainColors.lightGrey, 0.3),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const childBoxSx = {
  bgcolor: mainColors.white,
  px: 12,
  py: 6,
  borderRadius: "16px",
  border: 1,
  borderColor: mainColors.lightGrey,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function PageNotFound() {
  return (
    <Box sx={parentBoxSx}>
      <Box sx={childBoxSx}>
        <Typography variant="h5" color={mainColors.darkBlue}>
          Page Not Found
        </Typography>
      </Box>
    </Box>
  );
}

export default PageNotFound;
