import { IUploadPhotoDetails } from "../services/types";

const getBulkUploadFormData = (objects: IUploadPhotoDetails[]) => {
  let form_data = new FormData();
  objects.forEach((object) => {
    if (object.image) {
      form_data.append("image", object.image);
    }
  });
  const newObjects = objects.map((object, index) => ({
    ...object,
    year: object.date.substring(0, 4),
    month: object.date.substring(8, 10),
  }));
  form_data.append("photos", JSON.stringify(newObjects));
  return form_data;
};

export default getBulkUploadFormData;
