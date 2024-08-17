import { getDayAndMonth } from "../../utils/helpers";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Tooltip } from "@mui/material";

function TeamDateRow({ id, startDate, endDate }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        mt: 1,
      }}
    >
      <TeamDateCard color={mainColors.darkOrange} date={endDate} />

      <Typography variant="body1" sx={{ fontWeight: "bold", mx: 0.5 }}>
        الى
      </Typography>

      <TeamDateCard date={startDate} />

      <Typography
        variant="body1"
        sx={{ fontSize: "22px", fontWeight: "bold", ml: 1 }}
      >
        .{id}
      </Typography>
    </Box>
  );
}

export default TeamDateRow;

function TeamDateCard({ date, color }) {
  return (
    <Tooltip
      title={
        date && (
          <Typography variant="body1" color={mainColors.lightYellow}>
            {date}
          </Typography>
        )
      }
    >
      <Card
        sx={{
          mt: 1,
          bgcolor: !date
            ? mainColors.mainGrey
            : color
            ? color
            : mainColors.darkYellow,
          width: "45%",
          cursor: "default",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: mainColors.white,
            m: 0.5,
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" align="center" fontSize="16px">
            {date ? getDayAndMonth(date) : "غير محدد بعد"}
          </Typography>
        </Box>
      </Card>
    </Tooltip>
  );
}
