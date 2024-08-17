import Box from "@mui/material/Box";
import EllipsisText from "../../mui_custom_components/EllipsisText";
// import Tooltip from "@mui/material/Tooltip";
// import MultiLineText from "../../ui/MultiLineText";

function ReadyMadeSystemDiscreption({ desc }) {
  return (
    // <Tooltip title={<MultiLineText text={desc} align="right" />}>
    <Box width="53%" display="flex" justifyContent="center">
      <EllipsisText maxWidth="98%" sx={{ fontSize: "18px" }}>
        {desc}
      </EllipsisText>
    </Box>
    // </Tooltip>
  );
}

export default ReadyMadeSystemDiscreption;
