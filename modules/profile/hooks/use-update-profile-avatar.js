"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfileAvatar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["profile", "avatar"],
    mutationFn: (payload) =>
      apiClient
        .post(`/profile/avatar`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((r) => r.data),
    onSuccess: (data) => {
      queryClient.setQueryData("profile", (oldData) => {
        return { ...oldData, avatar: data.avatar };
      });
    },
  });
};
