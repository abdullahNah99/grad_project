import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import { alpha } from "@material-ui/core";
import { capitalize, getDayAndHour, getOrderType } from "../../utils/helpers";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import HandleOrderDialog from "./HandleOrderDialog";

function OrderItem({ order }) {
  const { created_at, type_id, user } = order;
  const { name } = user;
  const type = getOrderType(type_id);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuItem onClick={() => setOpen(true)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Avatar sx={{ bgcolor: mainColors.mainBlue, p: 0.5 }}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
          <Box flexGrow={1}>
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              {capitalize(name)}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: alpha(mainColors.darkGrey, 0.5),
                }}
              >
                {type}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: alpha(mainColors.darkGrey, 0.5),
                }}
              >
                {/* {created_at.split("T")[0]} */}
                {getDayAndHour(created_at)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </MenuItem>

      <HandleOrderDialog {...{ open, setOpen, order }} />
    </>
  );
}

export default OrderItem;
