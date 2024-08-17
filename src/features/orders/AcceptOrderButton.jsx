import { useEffect, useState } from "react";
import { mainColors } from "../../style/mainColors";
import { useSetAppointment } from "../appointments/useSetAppointment";
import { sendOrderNotification } from "../../services/apiTeams";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";

function AcceptOrderButton({
  order,
  team,
  startTime,
  setOpen,
  setStartTime,
  setSelectedTeam,
}) {
  const { isLoading, setAppointment } = useSetAppointment();
  const [disabled, setDisabled] = useState(true);

  const { id: teamID, uId: teamUID } = team;
  const { id: orderID, type_id } = order;

  useEffect(
    function () {
      if (orderID && teamID && startTime) setDisabled(false);
    },
    [orderID, teamID, startTime]
  );

  function handleClick() {
    const [month, day, year] = startTime.toLocaleDateString().split("/");
    const formattedStartTime = year.slice(2, 4) + "-" + month + "-" + day;

    setAppointment(
      {
        appointment: {
          orderId: orderID,
          start_time: formattedStartTime,
          team_id: teamID,
        },
      },
      {
        onSuccess: () => {
          sendOrderNotification({ type_id, teamUID, startTime });
          setSelectedTeam(null);
          setStartTime(null);
          setOpen(false);
        },
      }
    );
  }

  return (
    <>
      {isLoading && <Loader />}
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        sx={{
          bgcolor: mainColors.mainGreen,
          borderRadius: "12px",
          ":hover": { bgcolor: mainColors.darkGreen },
          "&.Mui-disabled": {
            color: "white",
            backgroundColor: "gray",
          },
        }}
      >
        قبول الطلب
      </Button>
    </>
  );
}

export default AcceptOrderButton;
