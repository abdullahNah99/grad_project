import { mainColors } from "../style/mainColors";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";

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

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box sx={parentBoxSx}>
      <Box sx={childBoxSx}>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            mr={1}
            color={mainColors.darkBlue}
            fontWeight={500}
            fontSize="22px"
          >
            Something Went Wrong
          </Typography>
          <ErrorOutline sx={{ color: mainColors.darkBlue }} />
        </Box>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontStyle: "italic", color: mainColors.darkGrey, mt: 1 }}
        >
          {error}
        </Typography>

        <Button
          variant="contained"
          onClick={resetErrorBoundary}
          sx={{
            mt: 1,
            width: "120px",
            bgcolor: alpha(mainColors.darkBlue, 0.9),
            ":hover": {
              bgcolor: mainColors.darkBlue,
            },
          }}
        >
          Try Again
        </Button>
      </Box>
    </Box>
  );
}

export default ErrorFallback;
