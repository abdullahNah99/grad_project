import { useQuery } from "@tanstack/react-query";
import { getAllReadyMadeSystems as getAllReadyMadeSystemsApi } from "../../services/apiReadyMadeSystems";

export function useGetAllReadyMadeSystems() {
  const {
    isLoading,
    data: { systems: readyMadeSystems } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["ReadyMadeSystems"],
    queryFn: getAllReadyMadeSystemsApi,
  });

  return { isLoading, readyMadeSystems, error, refetch };
}
