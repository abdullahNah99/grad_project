// import { useMutation } from "@tanstack/react-query";
// import { addUserToChat as addUserToChatApi } from "../../services/apiChat";
// import toast from "react-hot-toast";

// export function useAddUserToChat() {
//   const { isPending: isLoading, mutate: addUserToChat } = useMutation({
//     mutationFn: addUserToChatApi,

//     onSuccess: () => {
//       toast.success("تم اضافة الفريق لهذه المحادثة بنجاح");
//     },

//     onError: (err) => toast.error(err.message),
//     //   toast.error(
//     //     "حدث خطأ ما أثناء إضافة الفريق للمحادثة, يرجى المحاولة مرة أخرى"
//     //   ),
//   });

//   return { isLoading, addUserToChat };
// }
