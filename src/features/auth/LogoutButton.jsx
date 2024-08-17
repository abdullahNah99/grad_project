import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import { localStorageInstance } from "../../utils/localStorageProvider";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import IconButton from "@mui/material/IconButton";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import Tooltip from "@mui/material/Tooltip";
import AlertDialog from "../../ui/AlertDialog";

function LogoutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="تسجيل الخروج">
        <IconButton onClick={() => setOpen(true)}>
          <LogoutOutlined
            sx={{
              color: mainColors.mainError,
              fontSize: "32px",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </IconButton>
      </Tooltip>

      <AlertDialog
        open={open}
        setOpen={setOpen}
        title="تأكيد تسجيل الخروج"
        content="هل انت متاكد من قيامك بتسجيل الخروج"
        onSubmit={() => {
          localStorage.removeItem("token");
          localStorageInstance.onLogout();
          navigate("/login");
          queryClient.removeQueries();
        }}
      />
    </>
  );
}

export default LogoutButton;
