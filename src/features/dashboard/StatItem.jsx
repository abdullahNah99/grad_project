import { mainColors } from "../../style/mainColors";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function StatItem({
  bgcolor,
  color,
  borderColor,
  title,
  content,
  onClick,
  icon,
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: "25%",
        mx: 0.5,
        borderRadius: "16px",
        bgcolor,
        border: borderColor && 1,
        borderColor,
        cursor: "pointer",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {icon && (
          <Box
            sx={{
              borderRadius: "130px",
              bgcolor: alpha(mainColors.darkBlue, 0.1),
              p: 1.5,
              ml: 1,
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            minHeight: "74px",
            justifyContent: "space-between",
            width: icon ? "75%" : "100%",
          }}
        >
          <Typography
            variant="body1"
            align="right"
            sx={{ fontSize: "18px", color, fontWeight: 610 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              ml: 1,
              color,
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default StatItem;
