import axios from "axios";

let api = axios.create({
  withCredentials: true,
  baseURL: import.meta.process.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
});

export default api;
