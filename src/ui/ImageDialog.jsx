import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function ImageDialog({ open, setOpen, imageUrl }) {
  function handleCloseDialog() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        <TransformWrapper wheel={{ smoothStep: 0.03 }}>
          <TransformComponent>
            <img
              alt={imageUrl}
              src={imageUrl}
              style={{
                width: "100%",
                height: "calc(100vh - 64px)",
                objectFit: "contain",
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
