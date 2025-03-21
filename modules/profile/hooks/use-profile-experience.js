"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useProfileExperience = (id) => {
  return useQuery({
    queryKey: ["profile-experience", id],
    queryFn: () =>
      apiClient
        .get(`/profile-experience`, { params: { id } })
        .then((r) => r.data),
  });
};
