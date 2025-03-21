export const updateProfileFormDefaultValues = {
  name: "",
  national_id: "",
  sex: "",
  birth_date: "",
  address: "",
  summary: "",
  profession: "",
  education_level: "",
  has_relative_working: false,
  has_commercial_relationship: false,
  has_volunteered: false,
  has_own_business: false,
  area_of_interest: [],
};

export const serverToClientProfileDataTransformer = (data) => {
  return {
    ...data,
    summary: data.summary ?? "",
    birth_date: data.birth_date ? data.birth_date.slice(0, 10) : "",
  };
};
