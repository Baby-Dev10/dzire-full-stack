import axios from "axios";

let api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
});

export default api;
