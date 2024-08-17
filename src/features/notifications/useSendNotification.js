import { useMutation } from "@tanstack/react-query";
import { sendNotification as sendNotificationApi } from "../../services/apiNotification";

export function useSendNotification() {
  const {
    isPending: isLoading,
    data,
    error,
    mutate: sendNotification,
  } = useMutation({ mutationFn: sendNotificationApi });

  return { isLoading, data, error, sendNotification };
}
