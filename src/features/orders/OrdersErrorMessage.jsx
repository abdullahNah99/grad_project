import { mainColors } from "../../style/mainColors";
import ReplayOutlined from "@mui/icons-material/ReplayOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function OrdersErrorMessage({ refetch }) {
  return (
    <Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Something went wrong
      </Typography>
      <IconButton
        onClick={refetch}
        size="small"
        sx={{ display: "flex", justifyContent: "center", mx: "auto" }}
      >
        <ReplayOutlined
          sx={{
            color: mainColors.darkBlue,
            transition: "all 0.3s ease-in-out",
            ":hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      </IconButton>
    </Box>
  );
}

export default OrdersErrorMessage;
