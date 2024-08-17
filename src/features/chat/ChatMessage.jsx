import { alpha } from "@mui/material";
import { localStorageInstance } from "../../utils/localStorageProvider";
import { mainColors } from "../../style/mainColors";
import { useUpdateReadField } from "./useUpdateReadField";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/datesFormats";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Check from "@mui/icons-material/Check";
import DoneAll from "@mui/icons-material/DoneAll";
import NetworkImage from "../../ui/NetworkImage";
import ImageDialog from "../../ui/ImageDialog";

function ChatMessage({ message }) {
  const { updateReadField, isSuccess } = useUpdateReadField();

  const { fromId, msg, sent, read, type } = message;
  const isFromMe = !fromId ? true : fromId === localStorageInstance.uid;

  const [openImage, setOpenImage] = useState(false);

  useEffect(
    function () {
      if (!isFromMe && !read && !isSuccess) updateReadField({ message });
    },
    [isFromMe, isSuccess, message, read, updateReadField]
  );

  const borderTopRadius = isFromMe
    ? {
        borderTopLeftRadius: "16px",
      }
    : { borderTopRightRadius: "16px" };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: isFromMe ? "end" : "",
        }}
      >
        <Box
          onClick={() => {
            if (type === "text") return;
            setOpenImage(true);
          }}
          sx={{
            ...borderTopRadius,
            borderBottomRightRadius: "16px",
            borderBottomLeftRadius: "16px",
            border: 1,
            borderColor: isFromMe
              ? mainColors.mainOrange
              : mainColors.mainYellow,
            bgcolor: isFromMe
              ? alpha(mainColors.lightOrange, 0.5)
              : mainColors.lightYellow,
            mt: 2,
            p: type === "text" ? 1 : 0.5,
            pb: type !== "text" && 3,
            minWidth: "10vw",
            maxWidth: "28vw",
            minHeight: "48px",
            cursor: type !== "text" && "pointer",
          }}
        >
          {type === "text" && (
            <Typography
              variant="body2"
              color={mainColors.darkBlue}
              fontSize="16px"
              sx={{ wordWrap: "break-word" }}
            >
              {msg}
            </Typography>
          )}

          {type !== "text" && (
            <NetworkImage
              src={msg}
              sx={{ maxHeight: 200 }}
              sxLoading={{
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          )}

          <Box
            sx={{
              // position: type !== "text" && "fixed",
              display: "flex",
              justifyContent: "end",
              mt: type === "text" && 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: mainColors.darkGrey,
                mr: 0.3,
                ml: 3,
              }}
            >
              {formatDate(parseInt(sent)).formattedDate.slice(-8)}
            </Typography>

            {isFromMe && !message.read && (
              <Check sx={{ color: mainColors.darkGrey, fontSize: "15px" }} />
            )}

            {isFromMe && message.read && (
              <DoneAll
                sx={{ color: mainColors.mainOrange, fontSize: "15px" }}
              />
            )}
          </Box>
        </Box>
      </Box>

      {type !== "text" && (
        <ImageDialog open={openImage} setOpen={setOpenImage} imageUrl={msg} />
      )}
    </>
  );
}

export default ChatMessage;
