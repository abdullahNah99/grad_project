import { useChat } from "../../contexts/ChatContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  sendFirstMessage,
  sendMessage as sendMessageApi,
} from "../../services/apiChat";
import toast from "react-hot-toast";

export function useSendMessage() {
  const queryClient = useQueryClient();

  const { messages, selectedUser } = useChat();
  const isFirstMessage = messages?.length === 0;

  const {
    mutate: sendMessage,
    isPending: isSending,
    error,
  } = useMutation({
    mutationFn: isFirstMessage ? sendFirstMessage : sendMessageApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Chat", selectedUser.id] });
      queryClient.invalidateQueries({
        queryKey: ["LastMsg", selectedUser.id],
      });
    },

    onError: () =>
      toast.error(
        "حدث خطأ ما أثناء إرسال الرسالة, الرجاء التأكد من الاتصال بالانترنت"
      ),
  });

  return { sendMessage, isSending, error };
}
