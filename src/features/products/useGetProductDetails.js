import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/apiProducts";

export function useGetProductDetails() {
  const { productID } = useParams();
  const {
    data: { products: product } = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["Product", productID],
    queryFn: () => getProductDetails({ productID }),
  });

  return { product: product?.[0], isLoading, error, refetch };
}
