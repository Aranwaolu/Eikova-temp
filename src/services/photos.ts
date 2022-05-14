import request from "./index";

export const getAllPhotos = (page: number) =>
  request.get(`photos/?populate=user&sortBy=latest&page=${page}`);

export const getPhoto = (photoId: string) => request.get(`photos/${photoId}`);

export const searchPhotos = (query: string) =>
  request.get(`/photos/search?query=${query}`);

export const getContributorPhotos = (userId: string) =>
  request.get(`/photos/user-contributions/${userId}`);
