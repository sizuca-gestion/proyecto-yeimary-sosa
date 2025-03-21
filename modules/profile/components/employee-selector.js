"use client";
import { forwardRef } from "react";
import { Autocomplete, useEventCallback } from "@mui/material";
// import { useEmployees } from "../hooks/use-employees";
import { ExtendedTextField } from "@/src/components";

export const EmployeeSelector = forwardRef(
  ({ TextFieldProps, onChange, value: valueProp, ...props }, ref) => {
    const employees = []; // useEmployees();

    const handleChange = useEventCallback((_, value) => {
      onChange(value?.id ?? null, value);
    });

    const value = employees.data?.data.find((e) => e.id === valueProp);

    return (
      <Autocomplete
        ref={ref}
        size="small"
        margin="none"
        renderInput={(params) => (
          <ExtendedTextField {...params} {...TextFieldProps} />
        )}
        options={employees?.data?.data ?? []}
        isOptionEqualToValue={(employee) => employee.id}
        getOptionLabel={(employee) => employee.name}
        onChange={handleChange}
        value={value ?? null}
        {...props}
      />
    );
  }
);
