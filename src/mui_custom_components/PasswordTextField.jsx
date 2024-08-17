import { useState } from "react";
import { mainColors } from "../style/mainColors";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

function PasswordTextField({
  field = "password",
  width,
  validateErrMsg,
  register,
  moreValidation = {},
  disabled,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((showPass) => !showPass);
  }

  return (
    <TextField
      label={field === "password" ? "كلمة السر" : "تأكيد كلمة السر"}
      variant="standard"
      fullWidth
      type={!showPassword ? "password" : "text"}
      disabled={disabled}
      sx={{
        display: "flex",
        mb: 2,
        width,
        "& .MuiInput-underline:after": {
          borderBottomColor: mainColors.darkBlue,
        },
      }}
      style={{ textTransform: "capitalize" }}
      InputLabelProps={{
        style: { color: mainColors.darkBlue },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockOutlined sx={{ color: mainColors.darkBlue }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ ml: 1 }} onClick={togglePassword}>
              {showPassword ? (
                <VisibilityOff sx={{ color: mainColors.darkBlue }} />
              ) : (
                <Visibility sx={{ color: mainColors.darkBlue }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      error={Boolean(validateErrMsg)}
      helperText={validateErrMsg}
      {...register?.(field, {
        required: "Rqeuired",

        ...moreValidation,
      })}
    />
  );
}

export default PasswordTextField;
