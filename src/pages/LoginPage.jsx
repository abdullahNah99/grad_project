import { mainColors } from "../style/mainColors";
import LoginForm from "../features/auth/LoginForm";
import Box from "@mui/material/Box";

function LoginPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: mainColors.lightBlue,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box display="flex" justifyContent="center">
          <img alt="Logo" src="logo.png" width="225vw" />
        </Box>

        <LoginForm />
      </Box>
    </Box>
  );
}

export default LoginPage;
