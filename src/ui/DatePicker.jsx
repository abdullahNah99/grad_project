import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMui } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function DatePicker({ date, setDate, sx, disabled }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMui
        disabled={disabled}
        closeOnSelect
        sx={{ ...sx }}
        slotProps={{ inputAdornment: { position: "start" } }}
        value={dayjs(date)}
        onChange={(date) => {
          setDate?.(new Date(date["$d"]));
        }}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
