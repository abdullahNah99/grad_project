import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function EllipsisText({ maxWidth = 150, align, sx = {}, children }) {
  return (
    <Box sx={{ maxWidth, display: "inline-block" }}>
      <Typography
        variant="body1"
        align={align}
        noWrap
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default EllipsisText;
