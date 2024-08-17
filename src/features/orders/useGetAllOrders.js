import { useQuery } from "@tanstack/react-query";
import { getAllOrders as getAllOrdersApi } from "../../services/apiOrders";

export function useGetAllOrders() {
  const {
    isLoading,
    data: { orders } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: getAllOrdersApi,
  });

  return { isLoading, orders, error, refetch };
}
