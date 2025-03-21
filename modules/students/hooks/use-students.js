"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: () => apiClient.get(`/students`).then((r) => r.data),
  });
};
