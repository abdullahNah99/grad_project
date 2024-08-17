import { mainColors } from "../style/mainColors";
import { alpha } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RefetchButton from "./RefetchButton";

function ErrorMessage({ onRefetch, resourceName }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        border: 1,
        bgcolor: alpha(mainColors.lightBlue, 0.1),
        borderColor: mainColors.lightGrey,
        borderRadius: "32px",
        // bgcolor: "red",
      }}
    >
      <Typography variant="h6" color={mainColors.darkError}>
        {`حدث خطأ ما أثناء جلب ال ${resourceName}, يرجى إعادة المحاولة`}
      </Typography>
      {/* <Typography variant="h6" color="initial">
        {`Something went wrong while fetching ${resourceName}, Please check your connection and try again`}
      </Typography> */}

      <RefetchButton
        onRefetch={onRefetch}
        sx={{
          width: "44px",
          height: "44px",
        }}
      />
    </Box>
  );
}

export default ErrorMessage;
