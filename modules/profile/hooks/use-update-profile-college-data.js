"use client";
import { apiClient } from "@/src/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfileCollegeData = () => {
  return useMutation({
    mutationKey: ["profile", "college-data"],
    mutationFn: async (payload) => {
      const data = new FormData();

      for (const key in payload) {
        data.append(key, payload[key]);
      }

      return apiClient
        .patch(`/profile/college-data`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((r) => r.data);
    },
  });
};
