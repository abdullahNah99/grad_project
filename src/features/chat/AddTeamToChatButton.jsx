import { mainColors } from "../../style/mainColors";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import TeamsDialog from "../teams/TeamsDialog";

function AddTeamToChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <PersonAdd sx={{ color: mainColors.darkBlue }} />
      </IconButton>

      <TeamsDialog
        {...{ open, setOpen }}
        title="اختار الفرق لتضمها الى هذه المحادثة"
      />
    </>
  );
}

export default AddTeamToChatButton;
