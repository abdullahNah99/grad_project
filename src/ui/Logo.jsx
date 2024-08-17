import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

function Logo() {
  const { pathname } = useLocation();

  return (
    <Box sx={{ mx: "auto" }}>
      <img
        src="/public/logo.png"
        alt="Logo"
        width={pathname === "/chat" ? "50px" : "100px"}
      />
    </Box>
  );
}

export default Logo;
