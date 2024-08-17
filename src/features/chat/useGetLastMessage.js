import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLastMessage } from "../../services/apiChat";
import { useEffect } from "react";
import { useChat } from "../../contexts/ChatContext";

export function useGetLastMessage({ receiverID }) {
  const queryClient = useQueryClient();
  const { selectedUser } = useChat();

  useEffect(
    function () {
      if (selectedUser)
        queryClient.invalidateQueries(["LastMsg", selectedUser.id]);
    },
    [selectedUser, queryClient]
  );

  const {
    isLoading,
    data: lastMessageObj,
    error,
    refetch,
  } = useQuery({
    queryKey: ["LastMsg", receiverID],
    queryFn: () => getLastMessage({ receiverID }),
  });

  return { isLoading, lastMessageObj, error, refetch };
}
