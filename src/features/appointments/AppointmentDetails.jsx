import { getOrderType, phoneNumberFormatter } from "../../utils/helpers";
import Box from "@mui/material/Box";
import DetailItem from "../../ui/DetailItem";

function AppointmentDetails({ appointment }) {
  const { created_at, start_time, end_time, type_id, team_id, user, order } =
    appointment;
  const { location } = order;
  const { name, phone } = user;

  return (
    <Box
      sx={{
        width: "calc(100% - 64)px",
        display: "flex",
        justifyContent: "space-between",
        px: "64px",
        mt: 2,
      }}
    >
      <Box sx={{ width: "25%" }}>
        <DetailItem
          title="تاريخ تقديم الطلب"
          detail={created_at.split("T")[0]}
        />

        <DetailItem title="موعد الكشف" detail={start_time} />

        <DetailItem title="موعد الانتهاء" detail={end_time ?? "_"} />

        <DetailItem title="الفريق المسند" detail={team_id} />
      </Box>
      <Box sx={{ width: "75%" }}>
        <DetailItem
          title="نوع الطلب"
          detail={getOrderType(type_id).split(" ")[1]}
        />

        <DetailItem title="صاحب الطلب" detail={name} />

        <DetailItem
          title="رقم الهاتف"
          detail={`+${phoneNumberFormatter(phone)}`}
        />

        <DetailItem title="العنوان" detail={location} />
      </Box>
    </Box>
  );
}

export default AppointmentDetails;
