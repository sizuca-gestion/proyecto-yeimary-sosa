"use client";
import { forwardRef } from "react";
import { Autocomplete, useEventCallback } from "@mui/material";
import { useStudents } from "../hooks/use-students";
import { ExtendedTextField } from "@/src/components";

export const StudentSelector = forwardRef(
  ({ TextFieldProps, onChange, ...props }, ref) => {
    const students = useStudents();

    const handleChange = useEventCallback((_, value) => {
      onChange(value?.id ?? null, value);
    });

    return (
      <Autocomplete
        ref={ref}
        size="small"
        margin="none"
        renderInput={(params) => (
          <ExtendedTextField {...params} {...TextFieldProps} />
        )}
        options={students?.data?.data ?? []}
        isOptionEqualToValue={(student) => student.id}
        getOptionLabel={(student) => student.name}
        onChange={handleChange}
        {...props}
      />
    );
  }
);
