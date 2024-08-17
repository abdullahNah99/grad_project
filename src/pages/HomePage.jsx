import Box from "@mui/material/Box";
import DashboardStats from "../features/dashboard/DashboardStats";
import SalesChart from "../features/dashboard/SalesChart";
import ProjectsChart from "../features/dashboard/ProjectsChart";
import TopSoldProductsChart from "../features/dashboard/TopSoldProductsChart";
import { useGetDashboardData } from "../features/dashboard/useGetDashboardData";
import Loader from "../ui/Loader";

function HomePage() {
  const { isLoading, data } = useGetDashboardData();

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <Box p={3}>
      <DashboardStats />

      <SalesChart />

      <Box display="flex">
        <ProjectsChart />

        <TopSoldProductsChart />
      </Box>
    </Box>
  );
}

export default HomePage;
