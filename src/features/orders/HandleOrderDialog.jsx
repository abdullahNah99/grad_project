import { mainColors } from "../../style/mainColors";
import { alpha } from "@material-ui/core";
import { useState } from "react";
import { getOrderType } from "../../utils/helpers";
import Box from "@mui/material/Box";
import FullScreenDialog from "../../ui/FullScreenDialog";
import RejectOrderButton from "./RejectOrderButton";
import AcceptOrderButton from "./AcceptOrderButton";
import HandleOrderSideBar from "./HandleOrderSideBar";
import OrderDetails from "./OrderDetails";

function HandleOrderDialog({ open, setOpen, order }) {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const { type_id, id } = order;
  const type = getOrderType(type_id);

  return (
    <FullScreenDialog
      open={open}
      setOpen={setOpen}
      onClose={() => setSelectedTeam(null)}
      title={type}
      actions={
        <>
          <RejectOrderButton {...{ id, setOpen }} />
          <AcceptOrderButton
            order={order ?? {}}
            team={selectedTeam ?? {}}
            startTime={startTime}
            setOpen={setOpen}
            setStartTime={setStartTime}
            setSelectedTeam={setSelectedTeam}
          />
        </>
      }
    >
      <Box display="flex">
        <Box
          sx={{
            bgcolor: alpha(mainColors.lightGrey, 0.3),
            width: "70%",
            height: "100%",
          }}
        >
          <OrderDetails
            {...{
              order,
              selectedTeam,
              setSelectedTeam,
              startTime,
              setStartTime,
            }}
          />
        </Box>

        <HandleOrderSideBar {...{ selectedTeam }} />
      </Box>
    </FullScreenDialog>
  );
}

export default HandleOrderDialog;
