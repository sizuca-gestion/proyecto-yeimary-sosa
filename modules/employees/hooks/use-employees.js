"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

// TODO: Add pagination for performance
export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: () => apiClient.get(`/employees`).then((r) => r.data),
  });
};
