import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const service = {
  post: async (url, data) => {
    return axiosInstance.post(url, data);
  },

  get: async (url) => {
    return axiosInstance.get(url);
  },

  put: async (url, data) => {
    return axiosInstance.put(url, data);
  },

  delete: async (url) => {
    return axiosInstance.delete(url);
  },
};
