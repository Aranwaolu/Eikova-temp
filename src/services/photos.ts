import request from "./index";
import { IPhotoDetails, IUpdateDetails } from "./types";

export const getAllPhotos = (page: number) =>
  request.get(`photos/?populate=user&sortBy=latest&page=${page}`);

export const getPhoto = (photoId: string) => request.get(`photos/${photoId}`);

export const searchPhotos = (query: string) =>
  request.get(`/photos/search?query=${query}`);

export const getContributorPhotos = (userId: string) =>
  request.get(`/photos/user-contributions/${userId}`);

export const uploadPhoto = (photoDetails: IPhotoDetails) =>
  request.post(
    `/photos/upload`,
    { photoDetails },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const updatePhoto = (photoId: string, updateDetails: IUpdateDetails) =>
  request.patch(
    `/photos/${photoId}`,
    { updateDetails },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
