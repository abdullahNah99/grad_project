import { alpha } from "@material-ui/core";
import { mainColors } from "../../style/mainColors";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import AddCircle from "@mui/icons-material/AddCircle";
import TeamsDialog from "../teams/TeamsDialog";
import UserDetails from "../../ui/UserDetails";

function OrderTeam({ selectedTeam, setSelectedTeam }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="right">
        {!selectedTeam && (
          <Card
            onClick={() => setOpen(true)}
            sx={{
              display: "flex",
              bgcolor: alpha(mainColors.lightBlue, 0.5),
              p: 1,
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <Box display="flex">
              <AddCircle sx={{ color: mainColors.darkBlue }} />
              <Typography
                variant="body1"
                sx={{
                  ml: 1,
                  fontSize: "18px",
                  color: mainColors.darkBlue,
                }}
              >
                اضغط لاختيار فريق
              </Typography>
            </Box>
          </Card>
        )}

        {selectedTeam && (
          <UserDetails onClick={() => setOpen(true)} user={selectedTeam} />
        )}
        <Typography variant="h4" sx={{ ml: 2 }}>
          الفريق المسند
        </Typography>
      </Box>

      <TeamsDialog
        {...{ open, setOpen }}
        title="يرجى اختيار فريق لإسناد هذا الطلب له"
        isMultiple={false}
        onSelect={setSelectedTeam}
      />
    </>
  );
}

export default OrderTeam;
