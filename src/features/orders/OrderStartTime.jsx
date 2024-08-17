import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DatePicker from "../../ui/DatePicker";

const boxShadow =
  "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)";

function OrderStartTime({ startTime, setStartTime }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      <DatePicker
        date={startTime}
        setDate={setStartTime}
        sx={{
          bgcolor: alpha(mainColors.lightBlue, 0.5),
          borderRadius: "12px",
          boxShadow,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
      />

      <Typography variant="h4" sx={{ ml: 2 }}>
        موعد الكشف
      </Typography>
    </Box>
  );
}

export default OrderStartTime;
