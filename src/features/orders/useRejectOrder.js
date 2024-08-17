import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rejectOrder as rejectOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

export function useRejectOrder() {
  const queryClient = useQueryClient();

  const { isPending: isRejecting, mutate: rejectOrder } = useMutation({
    mutationFn: rejectOrderApi,

    onSuccess: () => {
      toast.success("تم رفض الطلب");
      queryClient.invalidateQueries({ queryKey: ["Orders"] });
    },

    onError: () =>
      toast.error("حدث خطأ ما أثناء رفض الطلب, يرجى المحاولة لاحقا"),
  });

  return { isRejecting, rejectOrder };
}
