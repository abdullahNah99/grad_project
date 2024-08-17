import { mainColors } from "../style/mainColors";
import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialog({ open, setOpen, title, content, onSubmit }) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ minWidth: "33vw" }}>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>إلغاء</Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{
            bgcolor: mainColors.mainError,
            ":hover": { bgcolor: mainColors.darkError },
          }}
        >
          تأكيد
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
