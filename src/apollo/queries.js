import { gql } from "@apollo/client";

const GET_VEHICLE_YEARS = gql`
  query vehicleYears {
    vehicleYears
  }
`;

const GET_VEHICLE = gql`
  query vehicleMakes($year: Int!) {
    vehicleMakes(year: $year)
  }
`;

const GET_VEHICLE_MODEL = gql`
  query vehicleModels($year: Int!, $make: String!) {
    vehicleModels(year: $year, make: $make)
  }
`;

const GET_VEHICLE_TRIM = gql`
  query vehicleTrims($year: Int!, $make: String!, $model: String!) {
    vehicleTrims(year: $year, make: $make, model: $model) {
      id
      make
      model
      trim
    }
  }
`;

const queries = (query) => {
  switch (query) {
    case "vehicleYears":
      return GET_VEHICLE_YEARS;
    case "vehicleMakes":
      return GET_VEHICLE;
    case "vehicleModels":
      return GET_VEHICLE_MODEL;
    case "vehicleTrims":
      return GET_VEHICLE_TRIM;
    default:
      return null;
  }
};

export default queries;
