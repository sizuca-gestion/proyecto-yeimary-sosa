"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProfileCertifications = (id) => {
  return useQuery({
    queryKey: ["profile-certifications", id],
    queryFn: () =>
      apiClient
        .get(`/profile-certifications`, { params: { id } })
        .then((r) => r.data),
  });
};
