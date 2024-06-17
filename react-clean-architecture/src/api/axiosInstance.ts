import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8088",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
