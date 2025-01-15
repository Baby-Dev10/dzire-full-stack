import axios from "axios";

let api = axios.create({
  withCredentials: true,
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
});

export default api;
