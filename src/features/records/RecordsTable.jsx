import { useGetAllRecords } from "./useGetAllRecords";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import RecordRow from "./RecordRow";
import NoDataMessage from "../../ui/NoDataMessage";

const titles = [
  { text: "صاحب السجل", sx: { mr: "20.5%" } },
  { text: "رقم الهاتف", sx: { mr: "23.5%" } },
  { text: "العنوان", sx: { mr: "24%" } },
  { text: "تاريخ الانشاء", sx: {} },
];

function RecordsTable() {
  const { error, isLoading, records, refetch } = useGetAllRecords();
  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage resourceName="السجلات" onRefetch={refetch} />;

  console.log(records);

  if (!records.length) return <NoDataMessage message="لا يوجد سجلات بعد" />;

  return <Table data={records} titles={titles} row={<RecordRow />} />;
}

export default RecordsTable;
