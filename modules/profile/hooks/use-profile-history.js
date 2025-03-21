"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProfileHistory = (id) => {
  return useQuery({
    queryKey: ["profile-history", id],
    queryFn: () =>
      apiClient.get(`/profile-history`, { params: { id } }).then((r) => r.data),
  });
};
