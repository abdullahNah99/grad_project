import { useMutation } from "@tanstack/react-query";
import { getTeamDates as getTeamDatesApi } from "../../services/apiTeams";

export function useGetTeamDates() {
  const {
    isPending: isLoading,
    mutate: getTeamDates,
    data: { "teamDates :": teamDates } = {},
    error,
  } = useMutation({
    mutationFn: getTeamDatesApi,
  });

  return { getTeamDates, isLoading, error, teamDates };
}
