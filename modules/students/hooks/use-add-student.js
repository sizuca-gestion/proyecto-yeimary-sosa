"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useAddStudent = () => {
  return useMutation({
    mutationKey: ["students"],
    mutationFn: (payload) => apiClient.post(`/students`, payload),
  });
};
