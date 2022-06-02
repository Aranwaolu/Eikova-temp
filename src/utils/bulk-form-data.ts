import { IUploadPhotoDetails } from "../services/types";

const getBulkUploadFormData = (objects: IUploadPhotoDetails[]) => {
  let form_data = new FormData();
  objects.forEach((object) => {
    if (object.image) {
      form_data.append("image", object.image);
    }
  });
  const newObjects = objects.map((object) => {
    let people = "";
    let newTags = "";
    if (object.minister && object.songMinister) {
      people = object.minister + ", " + object.songMinister;
      newTags = ", minister, choir";
    } else if (object.minister) {
      people = object.minister;
      newTags = ", minister";
    } else if (object.songMinister) {
      people = object.songMinister;
      newTags = ", choir";
    } else {
      people = "audience";
    }
    return {
      ...object,
      year: object.date.substring(0, 4),
      month: object.date.substring(8, 10),
      tags: object.tags + ", " + people + newTags,
      people,
    };
  });

  form_data.append("photos", JSON.stringify(newObjects));
  return form_data;
};

export default getBulkUploadFormData;
