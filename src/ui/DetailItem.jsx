import { mainColors } from "../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";

function DetailItem({ title, detail, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        mt: 2,
        alignItems: "center",
        ...sx,
      }}
    >
      <Typography variant="body1">{detail}</Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
        {title}
      </Typography>
      <FiberManualRecord
        sx={{ fontSize: "12px", color: mainColors.darkGrey, ml: 0.5 }}
      />
    </Box>
  );
}

export default DetailItem;
