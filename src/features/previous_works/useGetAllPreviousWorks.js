import { useQuery } from "@tanstack/react-query";
import { getAllPreviousWorks as getAllPreviousWorksApi } from "../../services/apiPreviousWorks";

export function useGetAllPreviousWorks() {
  const {
    data: { job: previousWorks } = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["PreviousWorks"],
    queryFn: getAllPreviousWorksApi,
  });

  return { previousWorks, isLoading, error, refetch };
}
