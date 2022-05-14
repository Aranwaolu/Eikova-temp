import { getUserFromLocal } from "../utils";
import { request } from "./index";

export const getAllPhotos = (page: number) => {
  return request.get(`photos/?populate=user&sortBy=latest&page=${page}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};

export const getPhoto = (photoId: string) => {
  return request.get(`photos/${photoId}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};

export const searchPhotos = (query: string) => {
  return request.get(`/photos/search?query=${query}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};

export const getContributorPhotos = (userId: string) => {
  return request.get(`/photos/user-contributions/${userId}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};
