import { IUploadPhotoDetails } from "../services/types";

const getUploadFormData = (object: IUploadPhotoDetails) => {
  let form_data = new FormData();
  form_data.append("title", object.title);
  form_data.append("description", object.description);
  form_data.append("year", object.date.substring(0, 4));
  form_data.append("month", object.date.substring(8, 10));
  form_data.append("tags", object.tags);
  form_data.append("meeting", object.meeting);
  form_data.append("location", object.location);
  if (object.image) {
    form_data.append("image", object.image);
  }
  if (object.minister && object.songMinister) {
    form_data.append("people", object.minister + ", " + object.songMinister);
    form_data.append(
      "tags",
      object.minister + ", " + object.songMinister + ", minister, choir"
    );
  } else if (object.minister) {
    form_data.append("people", object.minister);
    form_data.append("tags", object.minister + ", minister");
  } else if (object.songMinister) {
    form_data.append("people", object.songMinister);
    form_data.append("tags", object.songMinister + ", choir");
  } else {
    form_data.append("people", "audience");
    form_data.append("tags", "audience");
  }
  return form_data;
};

export default getUploadFormData;
