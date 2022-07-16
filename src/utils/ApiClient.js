import axios from "axios";

const instance = axios.create({
  baseURL: "https://travel-advisor.p.rapidapi.com/",
});
instance.defaults.headers.common["x-rapidapi-host"] =
  "travel-advisor.p.rapidapi.com";
instance.defaults.headers.common["x-rapidapi-key"] =
  process.env.REACT_APP_RAPID_API_SECRET;

export default instance;
