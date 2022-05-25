import { useContext } from "react";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import { uploadPhoto } from "../services/photos";

const useUploadPhoto = () => {
  const { pictures } = useContext(PictureFilesContext);
  const { picturesDetails } = useContext(PicturesDetailsContext);
  const handleUpload = () => {
    // picturesDetails
    uploadPhoto({
      ...picturesDetails[0],
      image: pictures.files ? pictures.files[0] : null,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return handleUpload;
};

export default useUploadPhoto;
