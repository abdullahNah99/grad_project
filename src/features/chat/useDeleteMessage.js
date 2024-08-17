import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMessage as deleteMessageApi } from "../../services/apiChat";
import { useChat } from "../../contexts/ChatContext";
import toast from "react-hot-toast";

export function useDeleteMessage() {
  const { selectedUser } = useChat();

  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteMessage } = useMutation({
    mutationFn: deleteMessageApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Chat", selectedUser.id] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteMessage };
}
