import { useQuery } from "@tanstack/react-query";
import { getDashboardData as getDashboardDataApi } from "../../services/apiDashboard";

export function useGetDashboardData() {
  const {
    isLoading,
    data: { data } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["Dashboard"],
    queryFn: getDashboardDataApi,
  });

  return { isLoading, data, error, refetch };
}
