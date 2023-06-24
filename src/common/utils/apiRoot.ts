export const getApiRoot = () => {
    // return "https://swapi.dev/api";
    return "http://localhost:3000";
}

import axios from "axios";
// const hostUrl = "http://localhost:3000";
const hostUrl = "https://swapi.dev";
const baseUrl = `${hostUrl}/api`;

/* Please note, an endpoint should not be part of the BaseURL */

export default () => {
  return axios.create({
    baseURL: baseUrl
  });
}