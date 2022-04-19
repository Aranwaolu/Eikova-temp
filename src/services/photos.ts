import { getUserFromLocal } from "../utils";
import { request } from "./index";

export const getAllPhotos = (page: number) => {
  return request.get(`photos/?sortBy=latest&page=${page}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};

export const searchPhotos = (query: string) => {  
  return request.get(`/photos/search?query=${query}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};
