import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import BuildOutlined from "@mui/icons-material/BuildOutlined";
import SettingsInputComposite from "@mui/icons-material/SettingsInputComposite";

function RecordDetailIcon({ typeID }) {
  return (
    <Box
      sx={{
        bgcolor: mainColors.lightGrey,
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        ml: 1,
        // border: 1,
        // borderColor: mainColors.lightGrey,
      }}
    >
      {typeID === 1 ? <BuildOutlined /> : <SettingsInputComposite />}
    </Box>
  );
}

export default RecordDetailIcon;
