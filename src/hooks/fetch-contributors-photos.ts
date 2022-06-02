import { useEffect, useState } from "react";
import { deletePhoto, getAllPhotos } from "../services/photos";

const useFetchContributorPhotos = () => {
  const defaulValue = {
    limit: 0,
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: [
      { thumbnail: "", url: "", id: "", title: "", user: { username: "" } },
    ],
  };
  const [contributorPhotos, setPhotos] = useState(defaulValue);
  const [contributorLoading, setLoading] = useState(true);
  const [contributorLoadingMore, setContributorLoadingMore] = useState(false);
  const [contributorError, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [contributorReachedPageLimit, setReachedPageLimit] = useState(false);

  const [deleting, setDeleting] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const confirmDelete = () => {
    setOpenDeleteModal(true);
  };
  const handleDelete = (imageID: string) => {
    setDeleteError("");
    setDeleting(true);
    deletePhoto(imageID)
      .then((res) => {
        let photos = contributorPhotos.results;
        photos = contributorPhotos.results.filter(
          (result) => result.id !== imageID
        );
        setPhotos({
          ...contributorPhotos,
          results: photos,
        });
        setOpenDeleteModal(false);
        setDeleting(false);
      })
      .catch((err) => {
        setDeleting(false);
        setDeleteError("Image could not be deleted.");
        setOpenDeleteModal(false);
      });
  };
  const onCloseModal = () => {
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    getAllPhotos(pageNumber)
      .then((res) => {
        if (pageNumber > 1) {
          setPhotos({
            ...res.data.photos,
            results: [...contributorPhotos.results, ...res.data.photos.results],
          });
        } else {
          setPhotos(res.data.photos);
        }
        if (res.data.photos.totalPages <= pageNumber) {
          setReachedPageLimit(true);
        }
        setLoading(false);
        setContributorLoadingMore(false);
      })
      .catch((err) => {
        setError("An Error occurred, please try again");
        setLoading(false);
        setContributorLoadingMore(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  const contributorLoadMore = () => {
    if (contributorPhotos.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
      setContributorLoadingMore(true);
    }
  };
  return {
    contributorPhotos,
    contributorLoading,
    contributorError,
    contributorLoadMore,
    contributorReachedPageLimit,
    contributorLoadingMore,
    deleteHandlers: {
      confirmDelete,
      handleDelete,
      deleting,
      openDeleteModal,
      onCloseModal,
      deleteError,
    },
  };
};

export default useFetchContributorPhotos;
