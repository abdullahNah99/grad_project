import { useMutation } from "@tanstack/react-query";
import { updateReadField as updateReadFieldApi } from "../../services/apiChat";

export function useUpdateReadField() {
  const {
    isPending: isLoading,
    mutate: updateReadField,
    isSuccess,
  } = useMutation({
    mutationFn: updateReadFieldApi,

    onError: (err) => console.log(err.message),
  });

  return { isLoading, updateReadField, isSuccess };
}
