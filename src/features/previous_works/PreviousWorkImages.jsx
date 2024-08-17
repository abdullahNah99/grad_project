import { useState } from "react";
import { alpha } from "@mui/material";
import { BASE_URL } from "../../utils/constants";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import NetworkImage from "../../ui/NetworkImage";
import Typography from "@mui/material/Typography";
import AddOutlined from "@mui/icons-material/AddOutlined";
import MultiImagesDialog from "../../ui/MultiImagesDialog";

function PreviousWorkImages({ previousWork }) {
  const [open, setOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const { images } = previousWork;

  function handleClick(image) {
    setClickedImage(image);
    setOpen(true);
  }

  return (
    <>
      {images.length === 1 && (
        <OneImage image={images[0].image} onClick={handleClick} />
      )}

      {images.length === 2 && (
        <TwoImages images={images} onClick={handleClick} />
      )}

      {images.length > 2 && (
        <MoreThanTwoImages images={images} onClick={handleClick} />
      )}

      <MultiImagesDialog
        {...{ open, setOpen }}
        current={images.map((image) => image.image).indexOf(clickedImage)}
        imageUrls={images.map(
          (image) => `${BASE_URL.split("/api")[0]}/${image.image}`
        )}
      />
    </>
  );
}

export default PreviousWorkImages;

function OneImage({ image, onClick }) {
  return (
    <Box
      sx={{
        width: "25%",
        height: "200px",
        display: "flex",
        // border: 1,
        // borderColor: mainColors.lightGrey,
        justifyContent: "center",
      }}
    >
      <NetworkImage
        src={`${BASE_URL.split("/api")[0]}/${image}`}
        onClick={() => onClick(image)}
      />
    </Box>
  );
}

function TwoImages({ images, onClick }) {
  return (
    <Box
      sx={{
        width: "25%",
        height: "200px",
        display: "flex",
        // border: 1,
        // borderColor: mainColors.lightGrey,
      }}
    >
      <Box
        sx={{
          // borderRight: 1,
          // borderLeft: 1,
          // borderColor: mainColors.lightGrey,
          width: "50%",
          height: "100%",
        }}
      >
        <NetworkImage
          src={`${BASE_URL.split("/api")[0]}/${images[0].image}`}
          onClick={() => onClick(images[0].image)}
        />
      </Box>

      <Box
        sx={{
          // borderRight: 1,
          // borderLeft: 1,
          // borderColor: mainColors.lightGrey,
          width: "50%",
          height: "100%",
        }}
      >
        <NetworkImage
          src={`${BASE_URL.split("/api")[0]}/${images[1].image}`}
          onClick={() => onClick(images[1].image)}
        />
      </Box>
    </Box>
  );
}

function MoreThanTwoImages({ images, onClick }) {
  return (
    <Box
      sx={{
        width: "25%",
        height: "200px",
        display: "flex",
        // border: 1,
        // borderColor: mainColors.lightGrey,
      }}
    >
      <Box
        sx={{
          // borderRight: 1,
          // borderColor: mainColors.lightGrey,
          width: "50%",
          height: "100%",
        }}
      >
        <NetworkImage
          src={`${BASE_URL.split("/api")[0]}/${images[0].image}`}
          onClick={() => onClick(images[0].image)}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            // borderBottom: 1,
            // borderRight: 1,
            // borderColor: mainColors.lightGrey,
            height: "50%",
          }}
        >
          <NetworkImage
            src={`${BASE_URL.split("/api")[0]}/${images[1].image}`}
            onClick={() => onClick(images[1].image)}
          />
        </Box>

        <Box sx={{ height: "50%", position: "relative" }}>
          <NetworkImage
            src={`${BASE_URL.split("/api")[0]}/${images[2].image}`}
            sx={{ opacity: images.length > 3 ? 0.5 : 1 }}
            onClick={() => onClick(images[2].image)}
          />

          {images.length > 3 && (
            <Box
              onClick={() => onClick(images[2].image)}
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                right: 0,
                bgcolor: alpha(mainColors.darkGrey, 0.7),
                opacity: 0.3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <AddOutlined fontSize="large" sx={{ color: mainColors.white }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: mainColors.white,
                  // cursor: "default",
                }}
              >
                {images.length - 2}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
