import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { formatNumber } from "../../utils/helpers";

function InvoicePaymentDetails({ invoice }) {
  const { totalPrice, otherPrice } = invoice;

  return (
    <List>
      <InvoicePaymentDetailsRow title="اجمالي المشتريات" price={totalPrice} />
      <InvoicePaymentDetailsRow title="ضريبة المبيعات" price={123456} />
      <InvoicePaymentDetailsRow title="اجور التركيب" price={otherPrice} />
      <InvoicePaymentDetailsRow title="الاجمالي المستحق" price={654321} />
    </List>
  );
}

export default InvoicePaymentDetails;

function InvoicePaymentDetailsRow({ title, price }) {
  return (
    <ListItem>
      <Typography variant="body1" mr={1}>
        {formatNumber(price)}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {`:${title}`}
      </Typography>
    </ListItem>
  );
}
