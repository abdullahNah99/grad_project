import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import Button from "@mui/material/Button";

function AddingButton({ onClick, children, sx }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        bgcolor: alpha(mainColors.darkBlue, 0.9),
        borderRadius: "32px",
        height: "40px",
        ":hover": {
          bgcolor: mainColors.darkBlue,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}

export default AddingButton;
