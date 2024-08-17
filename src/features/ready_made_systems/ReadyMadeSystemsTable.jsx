import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useGetAllReadyMadeSystems } from "./useGetAllReadyMadeSystems";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import ReadyMadeSystemRow from "./ReadyMadeSystemRow";
import TablePaginationRow from "../../ui/TablePaginationRow";
import NoDataMessage from "../../ui/NoDataMessage";

const titles = [
  { text: "العنوان", sx: { ml: "4%" } },
  { text: "الوصف", sx: { ml: "33%" } },
  { text: "المنتجات", sx: { ml: "37%" } },
];

function ReadyMadeSystemsTable() {
  const { isLoading, readyMadeSystems, error, refetch } =
    useGetAllReadyMadeSystems();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Loader />;

  if (error)
    return (
      <ErrorMessage onRefetch={refetch} resourceName="المنظومات الجاهزة" />
    );

  if (!readyMadeSystems.length) return <NoDataMessage resourceName="منظومة" />;

  const currentPage = Number(searchParams.get("page")) || 1;

  const pagesCount = Math.ceil(readyMadeSystems.length / PAGE_SIZE);

  const displayedReadyMadeSystems = readyMadeSystems.slice(
    PAGE_SIZE * (currentPage - 1),
    currentPage === pagesCount
      ? readyMadeSystems.length
      : PAGE_SIZE * currentPage
  );

  console.log(readyMadeSystems);

  return (
    <>
      <Table
        data={displayedReadyMadeSystems}
        titles={titles}
        row={<ReadyMadeSystemRow />}
      />

      <TablePaginationRow
        resourceName="ready made systems"
        count={readyMadeSystems.length}
      />
    </>
  );
}

export default ReadyMadeSystemsTable;
