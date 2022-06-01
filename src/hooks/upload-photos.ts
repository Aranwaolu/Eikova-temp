import { useContext, useState } from "react";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import { uploadMultiplePhotos } from "../services/photos";

const useBatchUpload = () => {
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);
  const { picturesDetails, setPictureDetails } = useContext(
    PicturesDetailsContext
  );
  const [openBatchModal, setOpenModal] = useState(false);
  const [uploadingBatch, setUploading] = useState(false);
  const [batchError, setError] = useState("");
  const handleBatchUpload = () => {
    setError("");
    setUploading(true);
    const joinedPhotoDetails = picturesDetails.map((detail, index) => ({
      ...detail,
      image: pictures.files ? pictures.files[index] : null,
    }));
    uploadMultiplePhotos(joinedPhotoDetails)
      .then((res) => {
        console.log(res.data);
        setUploading(false);
        setOpenModal(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        setError("An error occurred, please try again");
        setUploading(false);
      });
  };
  const onBatchModalClose = () => {
    setPictureFiles([]);
    setPictureDetails([]);
  };
  return {
    handleBatchUpload,
    openBatchModal,
    onBatchModalClose,
    uploadingBatch,
    batchError,
  };
};
export default useBatchUpload;
