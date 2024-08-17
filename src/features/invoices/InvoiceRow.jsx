import { getInvoiceID } from "../../utils/helpers";
import Box from "@mui/material/Box";
import EllipsisText from "../../mui_custom_components/EllipsisText";
import Typography from "@mui/material/Typography";
import InvoiceMenu from "./InvoiceMenu";

function InvoiceRow({ rowData }) {
  const {
    id,
    user: { name },
    date,
    otherPrice,
    totalPrice,
  } = rowData;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "99%",
          height: "100%",
        }}
      >
        <EllipsisText maxWidth={200} sx={{ ml: 1 }}>
          {`#${id}${getInvoiceID(rowData.created_at)}`}
        </EllipsisText>

        <EllipsisText>{name}</EllipsisText>

        <EllipsisText>{totalPrice}</EllipsisText>

        <EllipsisText>{otherPrice}</EllipsisText>

        <Typography variant="body1" mr={3.5}>
          {date}
        </Typography>
      </Box>
      <InvoiceMenu id={id} />
    </Box>
  );
}

export default InvoiceRow;
