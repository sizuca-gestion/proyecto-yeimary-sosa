export const updateProfileAdditionalDataFormDefaultValues = {
  has_relative_working: "",
  has_commercial_relationship: "",
  has_volunteered: "",
  has_own_business: "",
};

export const serverToClientProfileAdditionalDataTransformer = (data) => {
  return {
    has_relative_working: data.has_relative_working ?? "",
    has_commercial_relationship: data.has_commercial_relationship ?? "",
    has_volunteered: data.has_volunteered ?? "",
    has_own_business: data.has_own_business ?? "",
  };
};
