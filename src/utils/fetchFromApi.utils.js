import fetch from "isomorphic-fetch";
import CONFIG from "../config";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? CONFIG.DEV_API_URL
    : CONFIG.PROD_API_URL;

export const fetchFromApi = (path, options = {}) => {
  return fetch(`${baseUrl}${path}`, options);
};
