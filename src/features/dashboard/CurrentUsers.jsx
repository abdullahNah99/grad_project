import { alpha } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import { useState } from "react";
import StatItem from "./StatItem";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import UsersDialog from "./UsersDialog";

function CurrentUsers() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StatItem
        bgcolor={mainColors.lightBlue}
        color={mainColors.darkBlue}
        borderColor={alpha(mainColors.darkBlue, 0.2)}
        title="المستخدمين الحاليين"
        content={250}
        icon={
          <PersonOutlineOutlined
            sx={{ fontSize: "40px", color: mainColors.darkBlue }}
          />
        }
        onClick={() => setOpen(true)}
      />

      {/* <FullScreenDialog {...{ open, setOpen }} /> */}

      <UsersDialog {...{ open, setOpen }} />
    </>
  );
}

export default CurrentUsers;
