import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAppointment as setAppointmentApi } from "../../services/apiAppointments";
import toast from "react-hot-toast";

export function useSetAppointment() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: setAppointment } = useMutation({
    mutationFn: setAppointmentApi,

    onSuccess: () => {
      toast.success("تم إسناد الموعد بنحاج");
      queryClient.invalidateQueries({ queryKey: ["Orders"] });
    },

    onError: () =>
      toast.error("حذث خطأ ما أثناء إسناد الموعد, يرجى المحاولة لاحقا"),
  });

  return { isLoading, setAppointment };
}
