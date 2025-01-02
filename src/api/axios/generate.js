import { service } from "./axios.custom";

export const postSummary = (data) => {
  return service.post("/api/generator/summarize", data);
};

export const postImage = (data) => {
  return service.post("/api/generator/image", data);
};
