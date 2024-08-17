import Box from "@mui/material/Box";
import OrderTeam from "./OrderTeam";
import OrderUser from "./OrderUser";
import OrderStartTime from "./OrderStartTime";
import Grid from "@mui/material/Grid";
import OrderProducts from "./OrderProducts";
import OrderMaintenance from "./OrderMaintenance";
import OrderLocation from "./OrderLocation";

function OrderDetails({
  order,
  selectedTeam,
  setSelectedTeam,
  startTime,
  setStartTime,
}) {
  const { user, type_id, products, desc, image, location } = order;

  // console.log(location);
  return (
    <Box m={1}>
      <Grid container direction="column" spacing={8}>
        <Grid item>
          <OrderUser {...{ user }} />
        </Grid>

        <Grid item>
          <OrderLocation location={location} />
        </Grid>

        <Grid item>
          {type_id === 1 && <OrderMaintenance {...{ desc, image }} />}
          {type_id === 2 && <OrderProducts {...{ products }} />}
        </Grid>

        <Grid item>
          <OrderTeam {...{ selectedTeam, setSelectedTeam }} />
        </Grid>

        <Grid item mb={1}>
          <OrderStartTime {...{ startTime, setStartTime }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderDetails;
