import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPreviousWork as addPreviousWorkApi } from "../../services/apiPreviousWorks";
import toast from "react-hot-toast";

export function useAddPreviousWork() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: addPreviousWork } = useMutation({
    mutationFn: addPreviousWorkApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["PreviousWorks"] });
      toast.success("تم إضافة العمل بنجاح");
    },

    onError: (err) => {
      toast.error("حدث خطأ ما أثناء إضافة العمل, يرجى اعادة المحاولة");
      console.log(err.message);
    },
  });

  return { isLoading, addPreviousWork };
}
