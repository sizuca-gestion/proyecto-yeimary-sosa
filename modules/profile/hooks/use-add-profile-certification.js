"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddProfileCertification = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["profile-certifications"],
    mutationFn: (payload) =>
      apiClient.post(`/profile-certifications`, payload).then((r) => r.data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: "profile-certifications",
      });
    },
  });
};
