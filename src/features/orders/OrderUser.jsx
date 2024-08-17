import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserDetails from "../../ui/UserDetails";

function OrderUser({ user }) {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      <UserDetails
        user={user}
        onClick={() => {
          navigate({ pathname: "chat", search: `uid=${user.uId}` });
        }}
      />

      <Typography variant="h4" sx={{ ml: 2 }}>
        صاحب الطلب
      </Typography>
    </Box>
  );
}

export default OrderUser;
