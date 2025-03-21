"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useAddIncident = () => {
  return useMutation({
    mutationKey: ["incidents"],
    mutationFn: (payload) =>
      apiClient.patch(`/incidents`, payload).then((r) => r.data),
  });
};
