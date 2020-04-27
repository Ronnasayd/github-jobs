import axios from "axios";

const api = axios.create({
  baseURL: "https://github-jobs-proxy.appspot.com/positions",
  headers: {
    "Content-Type": "application/json",
  },
});
export const getCards = (description: string = "", location: string = "") => {
  return api.get("/", { params: { description, location } });
};
export default api;
