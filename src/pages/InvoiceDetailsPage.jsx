import { getInvoiceID } from "../utils/helpers";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useGetAllInvoices } from "../features/invoices/useGetAllInvoices";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InvoiceDetailsTitle from "../features/invoices/InvoiceDetailsTitle";
import InvoiceCompanyDetails from "../features/invoices/InvoiceCompanyDetails";
import InvoiceUserDetails from "../features/invoices/InvoiceUserDetails";
import InvoiceProductsList from "../features/invoices/InvoiceProductsList";
import InvoicePaymentDetails from "../features/invoices/InvoicePaymentDetails";
import PrintInvoiceButton from "../features/invoices/PrintInvoiceButton";
import InvoiceDate from "../features/invoices/InvoiceDate";
import Loader from "../ui/Loader";

// const invoice = {
//   id: "12345611",
//   order: {
//     user: {
//       name: "Abdullah Nahlawi",
//       email: "user1@gmail.com",
//       phone: "0994573075",
//     },
//     products: [
//       { name: "inverter must 5KW", price: 250, amount: 1 },
//       { name: "panel 550w lenovo", price: 150, amount: 8 },
//       { name: "battery 200A Lithiom Marcel", price: 350, amount: 4 },
//       { name: "inverter must 5KW", price: 250, amount: 1 },
//       { name: "panel 550w lenovo", price: 150, amount: 8 },
//       { name: "battery 200A Lithiom Marcel", price: 350, amount: 4 },
//     ],
//     location: "ميدان قاعة جامع الماجد",
//   },
//   totalPrice: 4120000,
//   otherPrice: 100000,
//   date: "11/10/2023",
// };

function InvoiceDetailsPage() {
  const invoiceRef = useRef();
  const queryClient = useQueryClient();
  const invoicesData = queryClient.getQueryData(["Invoices"]);
  const { isLoading, refetch } = useGetAllInvoices();
  const { invoiceID } = useParams();

  if (!invoicesData) refetch();
  if (isLoading) return <Loader />;

  const { invoices } = invoicesData;
  const invoice = invoices.find(
    (invoice) => Number(invoice.id) === Number(invoiceID)
  );

  invoice["order"] = {
    user: {
      name: "Abdullah Nahlawi",
      email: "user1@gmail.com",
      phone: "0994573075",
    },
    products: [
      { name: "inverter must 5KW", price: 40000000, amount: 10 },
      { name: "panel 550w lenovo", price: 150, amount: 8 },
      { name: "battery 200A Lithiom Marcel", price: 350, amount: 4 },
      { name: "inverter must 5KW", price: 250, amount: 1 },
      { name: "panel 550w lenovo", price: 150, amount: 8 },
      { name: "battery 200A Lithiom Marcel", price: 350, amount: 4 },
    ],
    location: "ميدان قاعة جامع الماجد",
  };

  const {
    id,
    date,
    order: { user, location, products },
  } = invoice;

  return (
    <Box>
      <Box p={3} ref={invoiceRef}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <InvoiceDate date={date} />
          <InvoiceDetailsTitle title="الفاتورة" />
        </Box>
        <Typography variant="body1" align="right" mb={2}>{`#${id}${getInvoiceID(
          invoice.created_at
        )}`}</Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <InvoiceCompanyDetails />
          <InvoiceUserDetails user={user} location={location} />
        </Box>

        <InvoiceProductsList products={products} />
        <InvoicePaymentDetails invoice={invoice} />
      </Box>

      <PrintInvoiceButton {...{ invoice, invoiceRef }} />
    </Box>
  );
}

export default InvoiceDetailsPage;
