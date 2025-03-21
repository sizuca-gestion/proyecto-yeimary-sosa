"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfileAdditionalData = () => {
  return useMutation({
    mutationKey: ["profile", "additional-data"],
    mutationFn: (payload) =>
      apiClient.patch(`/profile/additional-data`, payload).then((r) => r.data),
  });
};
