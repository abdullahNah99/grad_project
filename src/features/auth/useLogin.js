import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { localStorageInstance } from "../../utils/localStorageProvider";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,

    onSuccess: ({ token, uid }) => {
      navigate("/home", { replace: true });
      localStorage.setItem("token", token);
      localStorage.setItem("uid", uid);
      localStorageInstance.onLogin();
      console.log(token);
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("Email or password incorrect, Please try again");
    },
  });

  return { isLoading, login };
}
