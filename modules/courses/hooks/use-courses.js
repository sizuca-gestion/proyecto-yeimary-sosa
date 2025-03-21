"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useCoursesQueryConfig = (params) => ({
  queryKey: ["courses", params],
  queryFn: () => apiClient.get("/courses", { params }).then((r) => r.data),
});

export const useCourses = (params) => {
  return useQuery(useCoursesQueryConfig(params));
};
