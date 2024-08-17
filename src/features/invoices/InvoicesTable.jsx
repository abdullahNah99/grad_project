import { useSearchParams } from "react-router-dom";
import { useGetAllInvoices } from "./useGetAllInvoices";
import { PAGE_SIZE } from "../../utils/constants";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import InvoiceRow from "./InvoiceRow";
import TablePaginationRow from "../../ui/TablePaginationRow";
import ErrorMessage from "../../ui/ErrorMessage";
import NoDataMessage from "../../ui/NoDataMessage";

const titles = [
  { text: "رقم الفاتورة", sx: { mr: "17%", ml: "1%" } },
  { text: "الزبون", sx: { mr: "16%" } },
  { text: "اجمالي المنتجات", sx: { mr: "11%" } },
  { text: "اجور التركيب", sx: { mr: "16%" } },
  { text: "التاريخ", sx: {} },
];

// const data = [
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
//   {
//     id: "123456",
//     user: { name: "Abdullah Nahlawi" },
//     totalPrice: 4120000,
//     otherPrice: 100000,
//     date: "10/10/1999",
//   },
// ];

function InvoicesTable() {
  const { isLoading, error, invoices, refetch } = useGetAllInvoices();
  const data =
    invoices?.map((invoice) => {
      return { ...invoice, user: { name: "Abdullah Nahlawi" } };
    }) || [];

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pagesCount = Math.ceil(data.length / PAGE_SIZE);

  const displayedInvoices = data.slice(
    PAGE_SIZE * (currentPage - 1),
    currentPage === pagesCount ? data.length : PAGE_SIZE * currentPage
  );

  if (isLoading) return <Loader />;

  if (error)
    return <ErrorMessage resourceName="الفواتير" onRefetch={refetch} />;

  if (!invoices.length) return <NoDataMessage message="لا يوجد فواتير بعد" />;

  console.log(invoices);

  return (
    <>
      <Table data={displayedInvoices} titles={titles} row={<InvoiceRow />} />
      <TablePaginationRow resourceName="Invoices" count={data.length} />
    </>
  );
}

export default InvoicesTable;
