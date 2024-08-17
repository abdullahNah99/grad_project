import { mainColors } from "../style/mainColors";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function CustomTextField({
  validateErrMsg,
  register,
  field = "",
  width,
  label,
  isRequierd = true,
  prefixIcon,
  moreValidation = {},
  rows,
  defaultValue,
  disabled,
  type,
  sx,
}) {
  return (
    <TextField
      label={
        label ? label : field.includes("_") ? field.split("_").join(" ") : field
      }
      defaultValue={defaultValue}
      type={type}
      disabled={disabled}
      variant="standard"
      fullWidth
      multiline={Boolean(rows)}
      rows={rows}
      sx={{
        display: "flex",
        mb: 2,
        width,
        "& .MuiInput-underline:after": {
          borderBottomColor: mainColors.darkBlue,
        },
        ...sx,
      }}
      style={{ textTransform: "capitalize" }}
      inputProps={{
        style: { textTransform: field.includes("name") ? "capitalize" : null },
      }}
      InputLabelProps={{
        style: { color: mainColors.darkBlue },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {field === "email" ? (
              <EmailOutlined sx={{ color: mainColors.darkBlue }} />
            ) : field.includes("name") && !prefixIcon ? (
              <PersonOutline sx={{ color: mainColors.darkBlue }} />
            ) : (
              // cloneElement(prefixIcon, { sx: { color: "red" } })
              prefixIcon
            )}
          </InputAdornment>
        ),
      }}
      error={Boolean(validateErrMsg)}
      helperText={validateErrMsg}
      {...register?.(field, {
        required: isRequierd ? "required" : null,

        pattern:
          field === "email"
            ? {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              }
            : null,

        ...moreValidation,
      })}
    />
  );
}

export default CustomTextField;
