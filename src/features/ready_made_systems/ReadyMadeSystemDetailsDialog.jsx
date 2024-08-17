import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MultiLineText from "../../ui/MultiLineText";

function ReadyMadeSystemDetailsDialog({ open, setOpen, readyMadeSystem }) {
  const { created_at, desc, name } = readyMadeSystem;
  // const { created_at, desc, name, products } = readyMadeSystem;

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
          <Typography
            variant="body2"
            sx={{ color: alpha(mainColors.darkGrey, 0.5) }}
          >
            {created_at.split("T")[0]}
          </Typography>
          <Typography variant="h6" sx={{ color: mainColors.darkBlue }}>
            {name}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <MultiLineText
          text={desc}
          align="right"
          sx={{ color: mainColors.darkGrey }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ReadyMadeSystemDetailsDialog;
