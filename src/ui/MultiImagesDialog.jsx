import { mainColors } from "../style/mainColors";
import { useCallback, useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";

function MultiImagesDialog({ open, setOpen, imageUrls, current }) {
  const [currentIndex, setCurrentIndex] = useState(current > -1 ? current : 0);

  function handleCloseDialog() {
    setOpen(false);
    setCurrentIndex(0);
  }

  const handleNextImage = useCallback(
    function () {
      if (currentIndex === imageUrls.length - 1) return;
      setCurrentIndex((i) => i + 1);
    },
    [currentIndex, imageUrls]
  );

  const handlePrevImage = useCallback(
    function () {
      if (currentIndex === 0) return;
      setCurrentIndex((i) => i - 1);
    },
    [currentIndex]
  );

  const handleKeyDown = useCallback(
    function (event) {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    },
    [handleNextImage, handlePrevImage]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, open]);

  return (
    <>
      {open && <BackdropEffect />}

      <Dialog open={open} onClose={handleCloseDialog} sx={{ zIndex: 1300 }}>
        <DialogContent
          sx={{
            padding: 0,
            position: "relative",
          }}
        >
          <TransformWrapper wheel={{ smoothStep: 0.03 }}>
            <TransformComponent>
              <img
                alt={imageUrls[currentIndex]}
                src={imageUrls[currentIndex]}
                style={{
                  width: "100%",
                  height: "calc(100vh - 64px)",
                  objectFit: "contain",
                }}
              />
            </TransformComponent>
          </TransformWrapper>
        </DialogContent>

        <PreviousImageButton
          {...{ handlePrevImage, currentIndex, setCurrentIndex, imageUrls }}
        />

        <NextImageButton
          {...{ handleNextImage, currentIndex, setCurrentIndex, imageUrls }}
        />
      </Dialog>
    </>
  );
}

export default MultiImagesDialog;

function BackdropEffect() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(10px)", // Apply blur effect
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark semi-transparent background
        zIndex: 1200, // Ensure backdrop is under the buttons
      }}
    />
  );
}

function NextImageButton({
  handleNextImage,
  currentIndex,
  setCurrentIndex,
  imageUrls,
}) {
  if (imageUrls.length === 1) return;

  return (
    <IconButton
      onClick={handleNextImage}
      sx={{
        position: "fixed",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        color:
          currentIndex === imageUrls.length - 1
            ? mainColors.mainGrey
            : mainColors.white,
        zIndex: 1400,
      }}
    >
      <ArrowForwardIosIcon fontSize="large" />
    </IconButton>
  );
}

function PreviousImageButton({
  handlePrevImage,
  currentIndex,
  setCurrentIndex,
  imageUrls,
}) {
  if (imageUrls.length === 1) return;

  return (
    <IconButton
      onClick={handlePrevImage}
      sx={{
        position: "fixed",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        color: currentIndex > 0 ? mainColors.white : mainColors.mainGrey,
        zIndex: 1400,
      }}
    >
      <ArrowBackIosIcon fontSize="large" />
    </IconButton>
  );
}
