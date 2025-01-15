import axios from "axios";

let api = axios.create({
  withCredentials: true,
  // baseURL: '',
  headers: {
    "Content-Type": "application/json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
});

export default api;
