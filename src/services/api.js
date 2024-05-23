import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9002/impulsionaflow",
});

export default api;