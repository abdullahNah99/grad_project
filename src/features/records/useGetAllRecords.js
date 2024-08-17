import { useQuery } from "@tanstack/react-query";
import { getAllRecords as getAllRecordsApi } from "../../services/apiRecords";

export function useGetAllRecords() {
  const {
    isLoading,
    data: { records } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["Records"],
    queryFn: getAllRecordsApi,
  });

  return { isLoading, records, error, refetch };
}
