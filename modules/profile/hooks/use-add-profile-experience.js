"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddProfileExperience = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["profile-experience"],
    mutationFn: (payload) =>
      apiClient.post(`/profile-experience`, payload).then((r) => r.data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: "profile-experience" });
    },
  });
};
