import { alpha } from "@material-ui/core";
import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function FormDialog({
  title,
  open,
  setOpen,
  onSubmit,
  isSubmitting,
  children,
  width = "33vw",
  actionTitle,
  onClose,
}) {
  function handleClose() {
    setOpen(false);
    onClose?.();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // sx={{
      //   "& .MuiDialog-paper": {
      //     width: "900px",
      //     height: "500px",
      //   },
      // }}
    >
      <DialogTitle>{title}</DialogTitle>

      <Box component="form" onSubmit={onSubmit}>
        <DialogContent>
          <Box sx={{ width }}>{children}</Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
            sx={{
              color: mainColors.mainBlue,
            }}
          >
            إلغاء
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            autoFocus
            variant="contained"
            sx={{
              bgcolor: alpha(mainColors.darkBlue, 0.9),
              ":hover": {
                bgcolor: mainColors.darkBlue,
              },
            }}
          >
            {actionTitle || "إضافة"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default FormDialog;
