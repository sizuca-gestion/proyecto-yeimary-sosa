"use client";
import { apiClient } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useCourseQueryConfig = (id) => ({
  queryKey: ["courses", id],
  queryFn: () => apiClient.get(`/courses/${id}`).then((r) => r.data),
});

export const useCourse = (id) => {
  return useQuery(useCourseQueryConfig(id));
};
