import axios from "axios";

const api = axios.create({
  baseURL: "https://jobs.github.com/positions.json",
});
export const getCards = (description: string = "", location: string = "") => {
  if (!!description && !!location) {
    return api.get(`/?description=${description}&location=${location}`);
  } else {
    return api.get("/");
  }
};
export default api;
