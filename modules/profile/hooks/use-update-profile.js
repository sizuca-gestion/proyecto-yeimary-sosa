"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["profile"],
    mutationFn: (payload) =>
      apiClient.patch(`/profile`, payload).then((r) => r.data),
  });
};
