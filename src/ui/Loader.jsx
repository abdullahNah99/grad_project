import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProgressIndicator from "./css_styled_components/ProgressIndicator";

function Loader() {
  return (
    <Dialog
      open
      // hideBackdrop
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent>
        <ProgressIndicator />
      </DialogContent>
    </Dialog>
  );
}

export default Loader;
