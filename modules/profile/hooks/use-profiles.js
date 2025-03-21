"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProfiles = (params) => {
  return useQuery({
    queryKey: ["profiles", params],
    queryFn: () => apiClient.get("profiles", { params }).then((r) => r.data),
  });
};
