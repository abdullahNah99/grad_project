import { useQuery } from "@tanstack/react-query";
import { getAllTeams } from "../../services/apiTeams";

export function useGetAllTeams() {
  const {
    data: { team: teams } = {},
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["Teams"], queryFn: getAllTeams });

  return { isLoading, error, refetch, teams };
}
