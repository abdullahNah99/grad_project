import { PAGE_SIZE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useGetAllAppointments } from "./useGetAllAppointments";
import { capitalize, getFilteredAppointments } from "../../utils/helpers";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import AppointmentRow from "./AppointmentRow";
import NoDataMessage from "../../ui/NoDataMessage";
import TablePaginationRow from "../../ui/TablePaginationRow";

const titles = [
  { text: "صاحب الطلب", sx: { mr: "6%", ml: "1%" } },
  { text: "تاريخ تقديم الطلب", sx: { mr: "5%" } },
  { text: "نوع الطلب", sx: { mr: "8.5%" } },
  { text: "الفريق", sx: { mr: "10%" } },
  { text: "تاريخ البدء", sx: { mr: "5.5%" } },
  { text: "تاريخ الانتهاء", sx: { mr: "8%" } },
  { text: "الحالة", sx: { mr: "" } },
];

function AppointmentsTable() {
  const { isLoading, error, appointments, refetch } = useGetAllAppointments();

  const [searchParams] = useSearchParams();
  const currentType = searchParams.get("type") || "all";
  const currentStatus = searchParams.get("status") || "all";
  const currentPage = Number(searchParams.get("page")) || 1;

  if (isLoading) return <Loader />;

  if (error)
    return <ErrorMessage resourceName="المواعيد" onRefetch={refetch} />;

  console.log(appointments);

  const filteredAppointments = getFilteredAppointments({
    appointments,
    status: currentStatus,
    type: currentType,
  });

  if (!filteredAppointments?.length)
    return <NoDataMessage message="لا يوجد مواعيد " />;

  const pagesCount = Math.ceil(filteredAppointments.length / PAGE_SIZE);

  const displayedAppointments = filteredAppointments.slice(
    PAGE_SIZE * (currentPage - 1),
    currentPage === pagesCount
      ? filteredAppointments.length
      : PAGE_SIZE * currentPage
  );

  return (
    <>
      <Table
        titles={titles}
        data={displayedAppointments}
        row={<AppointmentRow />}
      />
      <TablePaginationRow
        resourceName={`${
          currentType !== "all" ? capitalize(currentType) : ""
        } Appointments`}
        count={filteredAppointments.length}
      />
    </>
  );
}

export default AppointmentsTable;
