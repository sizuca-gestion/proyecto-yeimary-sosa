"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfileHistory = () => {
  return useMutation({
    mutationKey: ["profile-history"],
    mutationFn: (payload) => apiClient.put(`/profile-history`, payload),
  });
};
