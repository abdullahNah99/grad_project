import { mainColors } from "../style/mainColors";
import { alpha } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function NoDataMessage({ resourceName, message }) {
  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          bgcolor: alpha(mainColors.lightBlue, 0.4),
          px: 1.5,
          py: 1.5,
          borderRadius: "64px",
        }}
      >
        {message && (
          <Typography variant="h5" color={mainColors.darkBlue}>
            {message}
          </Typography>
        )}

        {!message && resourceName && (
          <Typography variant="h5" color={mainColors.darkBlue}>
            {`لم تقم بإضافة أي ${resourceName} بعد`}
          </Typography>
        )}

        {/* <Typography variant="h5" color={mainColors.darkBlue}>
          {`You have not add any ${resourceName} yet`}
        </Typography> */}
      </Box>
    </Box>
  );
}

export default NoDataMessage;
