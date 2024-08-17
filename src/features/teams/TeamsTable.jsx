import { useGetAllTeams } from "./useGetAllTeams";
import TeamRow from "./TeamRow";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import NoDataMessage from "../../ui/NoDataMessage";
import Table from "../../ui/Table";

const titles = [
  { text: "البريد الإلكتروني", sx: { mr: "23%" } },
  { text: "الاسم", sx: { mr: "22%" } },
  { text: "الهاتف", sx: { mr: "21%" } },
  { text: "الحالة", sx: { ml: "2%" } },
];

function TeamsTable() {
  const { teams, isLoading, error, refetch } = useGetAllTeams();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage resourceName="الفرق" onRefetch={refetch} />;

  if (!teams.length) return <NoDataMessage resourceName="فريق" />;

  console.log(teams);

  return <Table data={teams} titles={titles} row={<TeamRow />} />;
}

export default TeamsTable;
