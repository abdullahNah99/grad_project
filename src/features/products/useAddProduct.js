import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as addProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useAddProduct() {
  const queryClient = useQueryClient();

  const {
    isPending: isLoading,
    mutate: addProduct,
    isSuccess,
  } = useMutation({
    mutationFn: addProductApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Products"] });
      toast.success("تم إضافة المنتج بنجاح");
    },

    onError: () =>
      toast.error("حدث خطأ ما أثناء إضافة المنتج, يرجى اعادة المحاولة"),
  });

  return { isLoading, addProduct, isSuccess };
}
