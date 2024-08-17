import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PriorityHigh from "@mui/icons-material/PriorityHigh";
import { mainColors } from "../../style/mainColors";

function OrdersNumber({ error, orders }) {
  if (!orders?.length && !error) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 25,
        right: -1,
        width: 20,
        height: 20,
        bgcolor: mainColors.darkOrange,
        border: "1px solid white",
        borderRadius: "50%",
      }}
    >
      {error && <PriorityHigh sx={{ fontSize: "21px", color: "white" }} />}
      {orders?.length && !error && (
        <Typography
          variant="body1"
          sx={{
            color: mainColors.white,
            position: "static",
            fontSize: "14px",
          }}
        >
          {orders.length}
        </Typography>
      )}
    </Box>
  );
}

export default OrdersNumber;
