import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToMyUsers as addToMyUsersApi } from "../../services/apiChat";
import toast from "react-hot-toast";

export function useAddToMyUsers() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: addToMyUsers } = useMutation({
    mutationFn: addToMyUsersApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["MyUsers"] });
    },

    onError: () =>
      toast.error("يرجى التأكد من الاتصال بالانترنت والمحاولة من جديد"),
  });

  return { isLoading, addToMyUsers };
}
