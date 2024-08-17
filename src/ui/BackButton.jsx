import { useNavigate } from "react-router-dom";
import { mainColors } from "../style/mainColors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      onClick={() => navigate(-1)}
      sx={{
        color: mainColors.darkBlue,
        fontSize: "16px",
      }}
    >
      <ArrowBackOutlined sx={{ mr: 1 }} />
      <Typography
        variant="body1"
        sx={{ fontSize: "18px", mb: 0.5, fontWeight: 500 }}
      >
        عودة
      </Typography>
    </Button>
  );
}

export default BackButton;
