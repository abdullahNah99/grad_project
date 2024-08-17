import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ClearAllOutlined from "@mui/icons-material/ClearAllOutlined";

function UsersDialog({ open, setOpen, currentUsers, activeUsers }) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { width: "40%", maxWidth: "80%" } }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Search />

          <Typography variant="h6" sx={{ color: mainColors.darkBlue }}>
            {currentUsers ? "كل المستخدمين" : "المستخدمين النشطين"}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent></DialogContent>
    </Dialog>
  );
}

export default UsersDialog;

function Search() {
  return (
    <TextField
      id="filled-search"
      variant="filled"
      size="small"
      placeholder="بحث"
      //   fullWidth
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
