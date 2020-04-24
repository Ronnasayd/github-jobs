import axios from "axios";

const api = axios.create({
  baseURL: "https://jobs.github.com/positions.json",
});
export const getCards = (description: string = "", location: string = "") => {
  return api.get("/", { params: { description, location } });
};
export default api;
