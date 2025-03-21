"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useAddProfileHistory = () => {
  return useMutation({
    mutationKey: ["profile-history"],
    mutationFn: (payload) => apiClient.post(`/profile-history`, payload),
  });
};
