import { useQuery } from "@tanstack/react-query";
import { getMyUsers as getMyUsersApi } from "../../services/apiChat";

export function useGetMyUsers() {
  const {
    isLoading,
    isFetching,
    error,
    data: myUsers,
    refetch,
  } = useQuery({ queryKey: ["MyUsers"], queryFn: getMyUsersApi });

  return { isLoading, error, myUsers, refetch, isFetching };
}
