import { mainColors } from "../style/mainColors";
import ReplayOutlined from "@mui/icons-material/ReplayOutlined";
import IconButton from "@mui/material/IconButton";

function RefetchButton({ onRefetch, sx }) {
  return (
    <IconButton onClick={onRefetch} sx={{ ...sx }}>
      <ReplayOutlined
        sx={{
          color: mainColors.darkBlue,
          transition: "all 0.3s ease-in-out",
          ":hover": {
            transform: "scale(1.2)",
          },
          ...sx,
        }}
      />
    </IconButton>
  );
}

export default RefetchButton;
