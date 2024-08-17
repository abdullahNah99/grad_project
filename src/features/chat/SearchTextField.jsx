import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ClearAllOutlined from "@mui/icons-material/ClearAllOutlined";

function SearchTextField() {
  return (
    <TextField
      id="filled-search"
      variant="filled"
      size="small"
      placeholder="بحث"
      fullWidth
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlined sx={{ color: mainColors.mainBlue, mb: "17.5px" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <ClearAllOutlined />
          </InputAdornment>
        ),
        inputProps: {
          style: {
            marginBottom: "17.5px",
            paddingLeft: 5,
            borderRadius: "32px",
          },
        },
        style: {
          borderRadius: "32px",
          height: "35px",
          background: alpha(mainColors.lightBlue, 0.3),
        },
      }}
      sx={{
        mt: 1,
        input: {
          "&::placeholder": { color: mainColors.mainBlue, opacity: 1 },
        },
      }}
    />
  );
}

export default SearchTextField;
