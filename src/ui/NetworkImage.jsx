import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { mainColors } from "../style/mainColors";

function NetworkImage({ src, sx, sxLoading, onClick }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleImageLoaded() {
    setLoading(false);
  }

  function handleImageError() {
    setLoading(false);
    setError(true);
  }

  return (
    <Box
      onClick={() => {
        onClick?.();
      }}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      minWidth="75px"
      sx={{ cursor: onClick && "pointer" }}
    >
      {loading && (
        <Box sx={sxLoading}>
          <CircularProgress
            size={30}
            style={{ position: "absolute", color: mainColors.mainOrange }}
          />
        </Box>
      )}
      {!error && (
        <Box
          component="img"
          src={src}
          height="100%"
          minWidth="75px"
          onLoad={handleImageLoaded}
          onError={handleImageError}
          style={{ display: loading ? "none" : "block" }}
          sx={{
            ...sx,
            // objectFit:'cover',
          }}
        />
      )}
      {error && !loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <ErrorOutline />
        </Box>
      )}
    </Box>
  );
}

export default NetworkImage;
