import { useRejectOrder } from "./useRejectOrder";
import { mainColors } from "../../style/mainColors";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";

function RejectOrderButton({ id, setOpen }) {
  const { isRejecting, rejectOrder } = useRejectOrder();
  return (
    <>
      {isRejecting && <Loader />}

      <Button
        variant="contained"
        onClick={() =>
          rejectOrder({ orderID: id }, { onSuccess: () => setOpen(false) })
        }
        sx={{
          bgcolor: mainColors.mainError,
          borderRadius: "12px",
          mr: 1,
          ":hover": { bgcolor: mainColors.darkError },
        }}
      >
        رفض الطلب
      </Button>
    </>
  );
}

export default RejectOrderButton;
