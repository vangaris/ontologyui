import axios from "./axios";

export const getService = () => {
  return axios.get(
    `/ontologies/efo/terms`,
  );
}