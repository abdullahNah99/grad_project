import { mainColors } from "../style/mainColors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NavigateNextOutlined from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlined from "@mui/icons-material/NavigateBeforeOutlined";

function CountSelector({ count, setCount }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: mainColors.lightOrange,
        borderRadius: "8px",
        ml: 1,
        mb: 1,
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          if (count > 0) setCount((c) => c - 1);
        }}
        size="small"
      >
        <NavigateBeforeOutlined sx={{ color: mainColors.white }} />
      </IconButton>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: mainColors.white, fontSize: "18px", fontWeight: "bold" }}
      >
        {count}
      </Typography>

      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          setCount((c) => c + 1);
        }}
        size="small"
      >
        <NavigateNextOutlined
          sx={{ color: mainColors.white, fontSize: "25px" }}
        />
      </IconButton>
    </Box>
  );
}

export default CountSelector;
