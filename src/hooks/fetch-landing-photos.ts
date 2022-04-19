import { useEffect, useState } from "react";
import { getAllPhotos } from "../services/photos";

const useFetchLandingPhotos = () => {
  const defaulValue = {
    limit: 0,
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: [{ thumbnail: "", url: "" }],
  };
  const [photos, setPhotos] = useState(defaulValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [reachedPageLimit, setReachedPageLimit] = useState(false);
  useEffect(() => {
    getAllPhotos(pageNumber)
      .then((res) => {
        if (pageNumber > 1) {
          setPhotos({
            ...res.data.photos,
            results: [...photos.results, ...res.data.photos.results],
          });
        } else {
          setPhotos(res.data.photos);
        }
        if (photos.totalPages <= pageNumber) {
          setReachedPageLimit(true);
        }
        setLoading(false);
        console.log(res.data.photos);
        
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred, please try again");
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  const loadMore = () => {
    if (photos.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };
  return { photos, loading, error, loadMore, reachedPageLimit };
};

export default useFetchLandingPhotos;
