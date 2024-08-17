import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReadyMadeSystem as addReadyMadeSystemApi } from "../../services/apiReadyMadeSystems";
import toast from "react-hot-toast";

export function useAddReadyMadeSystem() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: addReadyMadeSystem } = useMutation({
    mutationFn: addReadyMadeSystemApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ReadyMadeSystems"] });
      toast.success("تم إضافة المنظومة بنجاح");
    },

    onError: () =>
      toast.error("حدث خطأ ما أثناء إضافة المنظومة, يرجى اعادة المحاولة"),
  });

  return { isLoading, addReadyMadeSystem };
}
