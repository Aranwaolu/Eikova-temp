import { useEffect, useState } from "react";
import { getAllPhotos } from "../services/photos";

const useFetchContributorPhotos = () => {
  const defaulValue = {
    limit: 0,
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: [{ thumbnail: "", url: "", id: "", user: { username: "" } }],
  };
  const [contributorPhotos, setPhotos] = useState(defaulValue);
  const [contributorLoading, setLoading] = useState(true);
  const [contributorLoadingMore, setContributorLoadingMore] = useState(false);
  const [contributorError, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [contributorReachedPageLimit, setReachedPageLimit] = useState(false);
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
        setContributorLoadingMore(false)
      })
      .catch((err) => {
        setError("An Error occurred, please try again");
        setLoading(false);
        setContributorLoadingMore(false)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  const contributorLoadMore = () => {
    if (contributorPhotos.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
      setContributorLoadingMore(true)
    }
  };
  return {
    contributorPhotos,
    contributorLoading,
    contributorError,
    contributorLoadMore,
    contributorReachedPageLimit,
    contributorLoadingMore
  };
};

export default useFetchContributorPhotos;
