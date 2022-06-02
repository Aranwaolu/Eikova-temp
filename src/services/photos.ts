import { getUploadFormData } from "../utils";
import getBulkUploadFormData from "../utils/bulk-form-data";
import request from "./index";
import { IUploadPhotoDetails, IUpdateDetails } from "./types";

export const getAllPhotos = (page: number) =>
  request.get(`photos/?sortBy=latest&populate=user&page=${page}`);

export const getPhoto = (photoId: string) => request.get(`photos/${photoId}`);

export const getContributorPhotos = (userId: string) =>
  request.get(`/photos/user-contributions/${userId}`);

export const uploadPhoto = (photoDetails: IUploadPhotoDetails) => {
  return request.post(`/photos/upload`, getUploadFormData(photoDetails), {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const uploadMultiplePhotos = (photoDetails: IUploadPhotoDetails[]) => {
  console.log(getBulkUploadFormData(photoDetails).get("photos"));

  return request.post(
    `/photos/upload/bulk`,
    getBulkUploadFormData(photoDetails),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
export const updatePhoto = (photoId: string, updateDetails: IUpdateDetails) =>
  request.patch(`/photos/${photoId}`, updateDetails);
