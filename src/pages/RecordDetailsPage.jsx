import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import RecordDetailItem from "../features/records/RecordDetailItem";

const recordDetails = Array.from({ length: 10 });

function RecordDetailsPage() {
  return (
    <Box p={3}>
      {recordDetails.map((_, index) => (
        <Box key={index}>
          <RecordDetailItem key={index} typeID={(index % 2) + 1} />
          {index !== recordDetails.length - 1 && <Divider sx={{ my: 1 }} />}
        </Box>
      ))}
    </Box>
  );
}

export default RecordDetailsPage;
