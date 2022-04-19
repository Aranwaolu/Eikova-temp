import { getUserFromLocal } from "../utils";
import { request } from "./index";

export const getAllPhotos = (page: number) => {
  return request.get(`photos/?sortBy=latest&page=${page}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};
