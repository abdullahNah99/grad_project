import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeamAccount } from "../../services/apiTeams";
import toast from "react-hot-toast";

export function useAddTeam() {
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: addTeam } = useMutation({
    mutationFn: createTeamAccount,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Teams"] });
      toast.success("تم إضافة الفريق بنجاح");
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("حدث خطأ ما, يرجى التأكد من الاتصال بالانترنت");
    },
  });

  return { isLoading, addTeam };
}
