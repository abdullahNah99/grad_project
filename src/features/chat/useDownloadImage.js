import { useMutation } from "@tanstack/react-query";
import { downloadFileFromStorage } from "../../firebase/firebaseApis";
import toast from "react-hot-toast";

export function useDownloadImage() {
  const { isPending: isDownloading, mutate: downloadImage } = useMutation({
    mutationFn: downloadFileFromStorage,

    onError: (err) => toast.error(err.message),
  });

  return { isDownloading, downloadImage };
}
