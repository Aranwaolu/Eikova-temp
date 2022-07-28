import { useEffect, useState } from "react";
import { searchPhotos } from "../services/filter";
import { getAllPhotos } from "../services/photos";

const useFetchLandingPhotos = () => {
  const defaulValue = {
    limit: 0,
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: [
      { thumbnail: "", url: "", title: "", id: "", user: { username: "" } },
    ],
  };
  const [photos, setPhotos] = useState(defaulValue);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [reachedPageLimit, setReachedPageLimit] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getDefaultPhotos = () => {
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
        if (res.data.photos.totalPages <= pageNumber) {
          setReachedPageLimit(true);
        }
        setLoading(false);
        setLoadingMore(false);
      })
      .catch((err) => {
        setError("An error occurred, please try again");
        setLoading(false);
        setLoadingMore(false);
      });
  };
  useEffect(() => {
    if (searchQuery) {
      return;
    }
    getDefaultPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    setLoading(true);
  }, [searchQuery]);

  const doSearch = (pageNo: number) => {
    searchPhotos(searchQuery, pageNo)
      .then((res) => {
        const results = res.data.photos.body.hits.hits;

        const searchResults = results.map((result: any) => {
          return {
            thumbnail: result._source.thumbnail,
            url: result._source.url,
            id: result._source.id,
            user: {
              username: result._source.user,
            },
          };
        });
        if (pageNo > 1) {
          setPhotos({
            limit: 0,
            page: pageNo,
            totalPages: 5,
            totalResults: 0,
            results: [...photos.results, ...searchResults],
          });
        } else {
          setPhotos({
            limit: 0,
            page: pageNo,
            totalPages: 5,
            totalResults: 0,
            results: searchResults,
          });
        }
        if (5 <= pageNumber) {
          setReachedPageLimit(true);
        }
        setLoading(false);
        setLoadingMore(false);
      })
      .catch((err) => {
        setLoading(false);
        setLoadingMore(false);
      });
  };
  useEffect(() => {
    if (searchQuery.length === 0) {
      getDefaultPhotos();
      return;
    }
    doSearch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      return;
    }
    doSearch(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const loadMore = () => {
    if (photos.totalPages > pageNumber) {
      setPageNumber(pageNumber + 1);
      setLoadingMore(true);
    }
  };
  return {
    photos,
    loading,
    error,
    setSearchQuery,
    loadMore,
    reachedPageLimit,
    loadingMore,
  };
};

export default useFetchLandingPhotos;
