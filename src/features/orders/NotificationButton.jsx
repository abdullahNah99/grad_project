import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import { useGetAllOrders } from "./useGetAllOrders";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import Loader from "../../ui/Loader";
import OrdersMenu from "./OrdersMenu";
import OrdersNumber from "./OrdersNumber";
import Tooltip from "@mui/material/Tooltip";

function NotificationButton() {
  const { isLoading, error, orders, refetch } = useGetAllOrders();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  return (
    <>
      {isLoading && <Loader />}
      <Tooltip title="الإشعارات">
        <IconButton onClick={handleClick}>
          <NotificationsOutlined
            sx={{
              color: mainColors.lightYellow,
              fontSize: "32px",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
          />
          <OrdersNumber orders={orders} error={error} />
        </IconButton>
      </Tooltip>
      <OrdersMenu {...{ anchorEl, setAnchorEl, error, refetch, orders }} />
    </>
  );
}

export default NotificationButton;
