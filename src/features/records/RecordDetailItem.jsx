import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import RecordDetailIcon from "./RecordDetailIcon";
import Typography from "@mui/material/Typography";
import RecordDetailButton from "./RecordDetailButton";

function RecordDetailItem({ typeID }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <RecordDetailButton typeID={typeID} />

      <Box
        sx={{
          display: "flex",
          width: "85%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "76px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            direction: "rtl",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              color: mainColors.darkBlue,
            }}
          >
            {typeID === 1 ? "صيانة" : "تركيب"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              color: mainColors.darkGrey,
            }}
          >
            تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي يل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل طلب
            صي تم تسجيل طلب صيانة تم تسجيل طلب صي تم تسجيل طلب صيانة تم تسجيل
            طلب صي
          </Typography>
        </Box>

        <RecordDetailIcon typeID={typeID} />
      </Box>
    </Box>
  );
}

export default RecordDetailItem;
