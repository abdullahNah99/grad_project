import { useQuery } from "@tanstack/react-query";
import { getAllAppointments } from "../../services/apiAppointments";

export function useGetAllAppointments() {
  const {
    isLoading,
    error,
    refetch,
    data: { appointment: appointments } = {},
  } = useQuery({ queryKey: ["Appointments"], queryFn: getAllAppointments });

  return { isLoading, error, refetch, appointments };
}
