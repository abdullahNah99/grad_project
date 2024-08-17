import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { mainColors } from "../style/mainColors";

export default function SelectTextField({
  options = ["Option 1", "Option 2", "Option 3"],
  validateErrMsg,
  register,
  field = "",
  width = 535,
  label,
  isRequierd = true,
  prefixIcon = null,
  moreValidation = {},
  isLoadingOptions,
  defaultValue,
  clearable = true,
  disabled,
  value,
  setValue,
  reset,
  sx,
}) {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");

  useEffect(
    function () {
      if (reset) setValue?.("");
    },
    [reset, setValue]
  );

  function handleChange(e) {
    if (setValue) setValue(e.target.value);
    else setSelectedOption(e.target.value);
  }

  return (
    <TextField
      variant="standard"
      select={!isLoadingOptions}
      label={label || field}
      disabled={disabled}
      sx={{
        display: "flex",
        width,
        "& .MuiInput-underline:after": {
          borderBottomColor: mainColors.darkBlue,
        },
        ...sx,
      }}
      style={{ textTransform: "capitalize" }}
      error={Boolean(validateErrMsg)}
      helperText={validateErrMsg}
      value={value || selectedOption}
      onChange={handleChange}
      InputLabelProps={{
        style: { color: mainColors.darkBlue },
      }}
      inputProps={{
        ...register?.(field, {
          required: isRequierd ? "required" : null,

          ...moreValidation,
        }),
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{prefixIcon}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {isLoadingOptions && <CircularProgress size={20} />}
          </InputAdornment>
        ),
      }}
    >
      {clearable && (selectedOption || value) && (
        <MenuItem value={""}>None</MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
