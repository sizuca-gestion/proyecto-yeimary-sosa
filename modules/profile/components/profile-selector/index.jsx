"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { profileModuleMessages } from "@/locale";
import { ExtendedAutocomplete, ExtendedTextField } from "@/src/components";
import { useProfiles } from "../../hooks";
import { ProfileListItem } from "../profile-list-item";

export function ProfileSelector(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const profiles = useProfiles({ searchTerm });

  return (
    <ExtendedAutocomplete
      loading={profiles.isLoading}
      renderInput={(params) => (
        <ExtendedTextField
          {...params}
          placeholder={profileModuleMessages.searchProfile}
          InputProps={{ ...params.InputProps }}
        />
      )}
      options={profiles.data?.data ?? []}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        return (
          <Box {...props}>
            <ProfileListItem data={option} />
          </Box>
        );
      }}
      onChange={(_, value) => {
        router.push(`/profiles/${value.id}`);
      }}
      inputValue={searchTerm}
      onInputChange={(_, value) => {
        setSearchTerm(value);
      }}
      sx={{ "& .MuiInputBase-root": { borderRadius: 8 } }}
      {...props}
    />
  );
}
