import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProductStatus as changeProductStatusApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useChangeProductStatus() {
  const queryClient = useQueryClient();

  const { isPending: isChangingStatus, mutate: changeProductStatus } =
    useMutation({
      mutationFn: changeProductStatusApi,

      onSuccess: () => {
        toast.success("تم تعديل حالة المنتج بنجاح");
        queryClient.invalidateQueries({ queryKey: ["Products"] });
      },

      onError: () =>
        toast.error("حدث خطأ ما أثناء تعديل حالة المنتج, يرجى إعادة المحاولة"),
    });

  return { isChangingStatus, changeProductStatus };
}
