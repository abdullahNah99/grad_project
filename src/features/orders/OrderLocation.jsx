import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function OrderLocation({ location }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      <Card
        sx={{
          display: "flex",
          bgcolor: alpha(mainColors.lightBlue, 0.5),
          p: 1,
          borderRadius: "12px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          align="right"
          sx={{ color: mainColors.darkBlue, fontSize: "18px" }}
        >
          {location || "Location"}
        </Typography>
      </Card>
      <Typography variant="h4" sx={{ ml: 2 }}>
        العنوان
      </Typography>
    </Box>
  );
}

export default OrderLocation;
