"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useIncidents = () => {
  return useQuery({
    queryKey: ["incidents"],
    queryFn: () => apiClient.get(`/incidents`).then((r) => r.data),
  });
};
