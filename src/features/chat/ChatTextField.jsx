import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RateReviewOutlined from "@mui/icons-material/RateReviewOutlined";
import SelectImagesIconButton from "./SelectImagesIconButton";

function ChatTextField({ message, setMessage }) {
  return (
    <TextField
      id="filled-chat"
      variant="filled"
      size="small"
      autoComplete="off"
      placeholder="اكتب رسالة..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <RateReviewOutlined
              sx={{ color: mainColors.mainBlue, mb: "17.5px" }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <SelectImagesIconButton />
          </InputAdornment>
        ),
        inputProps: {
          style: {
            marginBottom: "20px",
            paddingLeft: 5,
            borderRadius: "8px",
          },
        },
        style: {
          borderRadius: "8px",
          height: "40px",
          background: alpha(mainColors.lightBlue, 0.3),
        },
      }}
      sx={{
        width: "95%",
        input: {
          "&::placeholder": { color: mainColors.mainBlue, opacity: 1 },
        },
      }}
    />
  );
}

export default ChatTextField;
