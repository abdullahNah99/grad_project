import { useSendMessage } from "./useSendMessage";
import { alpha } from "@mui/material";
import { useEffect, useState } from "react";
import { useChat } from "../../contexts/ChatContext";
import { mainColors } from "../../style/mainColors";
import { useSendImage } from "./useSendImage";
import AttachFileOutlined from "@mui/icons-material/AttachFileOutlined";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function SelectImagesIconButton() {
  const [image, setImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const { selectedUser } = useChat();
  const { isLoading, sendImage } = useSendImage();
  const { sendMessage, isSending } = useSendMessage();

  useEffect(
    function () {
      if (image) setOpenDialog(true);
    },
    [image]
  );

  function handleCloseDialog() {
    if (image) setImage(null);
    setOpenDialog(false);
  }

  return (
    <>
      <IconButton
        value={image}
        onChange={(e) => setImage(e.target.files[0])}
        size="small"
        component="label"
      >
        <AttachFileOutlined sx={{ color: mainColors.darkBlue }} />

        <input type="file" style={{ display: "none" }} accept="image/*" />
      </IconButton>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{"Send an image"}</DialogTitle>

        <DialogContent>
          <Box mx={7} my={2}>
            {/* {(isUploading || isSending) && (
              <CircularProgress size={150} thickness={1} />
            )} */}

            {/* {image && !isUploading && !isSending && ( */}
            {image && (
              <img
                style={{ width: 250 }}
                src={URL.createObjectURL(image)}
                alt="imagee"
              />
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            disabled={isLoading}
            sx={{ color: mainColors.darkBlue }}
          >
            الغاء
          </Button>
          <Button
            autoFocus
            variant="contained"
            disabled={isLoading || isSending}
            sx={{
              bgcolor: alpha(mainColors.darkBlue, 0.95),
              ":hover": {
                bgcolor: mainColors.darkBlue,
              },
            }}
            onClick={() => {
              sendImage(
                { receiverID: selectedUser.id, image },
                {
                  onSuccess: (imageUrl) => {
                    sendMessage(
                      {
                        imageUrl,
                        receiverID: selectedUser.id,
                      },
                      {
                        onSuccess: () => {
                          setOpenDialog(false);
                        },
                      }
                    );
                  },
                }
              );
            }}
          >
            ارسال
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SelectImagesIconButton;
