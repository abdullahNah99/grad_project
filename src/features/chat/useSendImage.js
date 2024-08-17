import { useMutation } from "@tanstack/react-query";
import { sendImage as sendImageApi } from "../../services/apiChat";
import toast from "react-hot-toast";

export function useSendImage() {
  const {
    isPending: isLoading,
    mutate: sendImage,
    error,
  } = useMutation({
    mutationFn: sendImageApi,
    onError: () =>
      toast.error("حذث خطأ ما أثناء ارسال الصورة, يرجى اعادة المحاولة"),
  });

  return { isLoading, sendImage, error };
}
