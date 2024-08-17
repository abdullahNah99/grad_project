import { useQuery } from "@tanstack/react-query";
import { getAllProducts as getAllProductsApi } from "../../services/apiProducts";

export function useGetAllProducts() {
  const {
    data: { products } = {},
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["Products"], queryFn: getAllProductsApi });

  return { products, isLoading, error, refetch };
}
