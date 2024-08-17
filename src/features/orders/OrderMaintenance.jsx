import { BASE_URL } from "../../utils/constants";
import { alpha } from "@mui/material";
import { useState } from "react";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import ImageDialog from "../../ui/ImageDialog";

function OrderMaintenance({ desc, image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="right">
        <Tooltip
          title={
            <Typography variant="body1" color={mainColors.lightYellow}>
              اضغط لعرض الصور
            </Typography>
          }
        >
          <Card
            onClick={() => setOpen(true)}
            sx={{
              display: "flex",
              bgcolor: alpha(mainColors.lightBlue, 0.5),
              p: 1,
              borderRadius: "12px",
              cursor: "pointer",
              maxWidth: "82%",
            }}
          >
            <Typography
              variant="body1"
              align="right"
              sx={{ color: mainColors.darkBlue, fontSize: "18px" }}
            >
              {desc}
            </Typography>
          </Card>
        </Tooltip>
        <Typography variant="h4" sx={{ ml: 2 }}>
          التفاصيل
        </Typography>
      </Box>

      <ImageDialog
        {...{ open, setOpen }}
        imageUrl={`${BASE_URL.split("/api")[0]}/${image}`}
      />
    </>
  );
}

export default OrderMaintenance;
