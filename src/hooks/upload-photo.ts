import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import { uploadPhoto } from "../services/photos";
import { IPicturesDetailsContext } from "../services/types";

const useUploadPhoto = (activeIndex: number) => {
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);
  const { picturesDetails, setPictureDetails } = useContext(
    PicturesDetailsContext
  );
  const [openModal, setOpenModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const handleUpload = (
    picturesDetail: IPicturesDetailsContext["picturesDetails"][0]
  ) => {
    setUploading(true);
    setError("");
    uploadPhoto({
      ...picturesDetail,
      image: pictures.files ? pictures.files[activeIndex] : null,
    })
      .then((res) => {
        setUploading(false);
        setOpenModal(true);
      })
      .catch((err) => {
        console.log(err.response);
        setUploading(false);
        setError("An error occurred. Please try again");
      });
  };
  const onModalClose = () => {
    if (pictures.files && pictures.files.length === 1) {
      history.push("/upload");
    }
    const pictureFilesCopy = pictures.files ? [...pictures.files] : [];
    pictureFilesCopy.splice(activeIndex, 1);
    setPictureFiles(pictureFilesCopy);
    const pictureDetailsCopy = [...picturesDetails];
    pictureDetailsCopy.splice(activeIndex, 1);
    setPictureDetails(pictureDetailsCopy);
    console.log(pictureDetailsCopy[activeIndex]);
    setOpenModal(false);
    window.scrollTo(0, 0);
  };
  return { handleUpload, openModal, onModalClose, uploading, error };
};

export default useUploadPhoto;
