import { useQuery } from "@tanstack/react-query";
import { getAllInvoices as getAllInvoicesApi } from "../../services/apiInvoices";

export function useGetAllInvoices() {
  const {
    isLoading,
    data: { invoices } = {},
    error,
    refetch,
  } = useQuery({
    queryKey: ["Invoices"],
    queryFn: getAllInvoicesApi,
  });

  return { isLoading, invoices, error, refetch };
}
