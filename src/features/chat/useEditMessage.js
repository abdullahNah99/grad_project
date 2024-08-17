import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editMessage as editMessageApi } from "../../services/apiChat";
import { useChat } from "../../contexts/ChatContext";
import toast from "react-hot-toast";

export function useEditMessage() {
  const { selectedUser } = useChat();

  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editMessage } = useMutation({
    mutationFn: editMessageApi,

    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Chat", selectedUser.id] }),

    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editMessage };
}
