import { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";
import { getPhoto, updatePhoto } from "../services/photos";

import { IPicturesDetailsContext } from "../services/types";

const useEditPhoto = () => {
  const picturesDetailsDefault = {
    title: "",
    description: "",
    thumbnail: "",
    tags: "",
    meeting: "",
    location: "",
    date: "",
    minister: "",
    songMinister: "",
  };
  const { image } = useParams<{ image: string }>();
  const [picture, setPicture] = useState(picturesDetailsDefault);
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  const { setPictureDetails } = useContext(PicturesDetailsContext);
  const [uploading, setUploading] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    document.title = "Edit picture - Eikova";
    getPhoto(image)
      .then((res) => {
        const data = {
          title: res.data.photo.photo.title,
          description: res.data.photo.photo.description,
          thumbnail: res.data.photo.photo.thumbnail,
          tags: res.data.photo.photo.tags.join(", "),
          meeting: res.data.photo.photo.meeting
            ? res.data.photo.photo.meeting
            : res.data.photo.photo.meeting_id,
          location: res.data.photo.photo.location
            ? res.data.photo.photo.location
            : "",
          date: res.data.photo.photo.updatedAt.slice(0, 10),
          minister: res.data.photo.photo.minister
            ? res.data.photo.photo.minister.join(", ")
            : "",
          songMinister: res.data.photo.photo.minister
            ? res.data.photo.photo.minister.join(", ")
            : "",
        };
        setPicture(data);
        setPictureDetails([data]);
        setLoadingPhoto(false);
      })
      .catch((err) => {
        setError("An error occured, please try again.");
        setLoadingPhoto(false);
      });
  }, [image, setPictureDetails]);

  const handleEdit = (
    pictureDetail: IPicturesDetailsContext["picturesDetails"][0]
  ) => {
    setUploading(true);
    const taggedPicturedetail = {
      ...pictureDetail,
    };
    if (pictureDetail.minister) {
      taggedPicturedetail.tags =
        taggedPicturedetail.tags + ", " + taggedPicturedetail.minister;
    }
    if (pictureDetail.songMinister) {
      taggedPicturedetail.tags =
        taggedPicturedetail.tags + ", " + taggedPicturedetail.songMinister;
    }
    if (pictureDetail.location) {
      taggedPicturedetail.tags =
        taggedPicturedetail.tags + ", " + taggedPicturedetail.location;
    }
    updatePhoto(image, taggedPicturedetail)
      .then((res) => {
        setUploading(false);
        setOpenSuccessModal(true);
      })
      .catch((err) => {
        setUploading(false);
      });
  };
  const onSuccessModalClose = () => {
    history.push("/");
  };
  return {
    handleEdit,
    picture,
    error,
    loadingPhoto,
    uploading,
    openSuccessModal,
    onSuccessModalClose,
  };
};

export default useEditPhoto;
