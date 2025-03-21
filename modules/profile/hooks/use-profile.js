"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProfile = (id) => {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: () =>
      apiClient.get("/profile", { params: { id } }).then((r) => r.data),
  });
};
