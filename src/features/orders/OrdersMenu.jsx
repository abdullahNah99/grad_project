import Menu from "@mui/material/Menu";
import OrderItem from "./OrderItem";
import OrdersErrorMessage from "./OrdersErrorMessage";
import StyledScrollbarList from "../../mui_custom_components/StyledScrollbarList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function OrdersMenu({ anchorEl, setAnchorEl, error, refetch, orders }) {
  const open = Boolean(anchorEl);

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box minWidth="22vw">
        <StyledScrollbarList sx={{ maxHeight: "40vh" }}>
          {error && <OrdersErrorMessage refetch={refetch} />}
          {!error &&
            (orders?.length ? (
              orders.map((order, index) => (
                <OrderItem key={index} order={order} />
              ))
            ) : (
              <Box
                height="32px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body1" color="initial">
                  لا يوجد طلبات جديدة
                </Typography>
              </Box>
            ))}
        </StyledScrollbarList>
      </Box>
    </Menu>
  );
}

export default OrdersMenu;
