import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import PreviousWorkImages from "./PreviousWorkImages";
import Typography from "@mui/material/Typography";
import MultiLinesEllipsisText from "../../ui/MultiLinesEllipsisText";
import PreviousWorkMenu from "./PreviousWorkMenu";

function PreviousWorkItem({ previousWork }) {
  const { disc, title } = previousWork;
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <PreviousWorkMenu />

      <Box
        sx={{
          width: "70%",
          height: "200px",
        }}
      >
        <Typography
          variant="h6"
          align="right"
          gutterBottom
          sx={{ fontWeight: "bold", mr: 1, color: mainColors.darkBlue }}
        >
          {title}
        </Typography>

        <MultiLinesEllipsisText
          align="right"
          sx={{ mr: 1, color: mainColors.darkGrey }}
          text={disc}
          maxLines={6}
        />
      </Box>

      <PreviousWorkImages previousWork={previousWork} />
    </Box>
  );
}

export default PreviousWorkItem;
