import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchPhotos } from "../services/filter";

const useSearchPhotos = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("query");
  const meeting = query.get("meeting");
  const year = query.get("year");
  const month = query.get("month");
  const locationQuery = query.get("location");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = useCallback(() => {
    setLoading(true);
    setError("");
    const searchString = `${searchQuery && searchQuery} ${
      !!meeting ? meeting : ""
    } ${!!year ? year : ""} ${!!month ? month : ""} ${
      !!locationQuery ? locationQuery : ""
    }`;

    searchPhotos(searchString, pageNumber)
      .then((res) => {
        const results = res.data.photos.body.hits.hits;
        const photos = results.map((result: any) => {
          return {
            thumbnail: result._source.thumbnail,
            url: result._source.url,
            id: result._source.id,
            user: {
              username: result._source.user,
            },
          };
        });
        setSearchResults(photos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occured, please try again.");
        setLoading(false);
      });
  }, [locationQuery, meeting, month, pageNumber, searchQuery, year]);
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);
  return { searchResults, loading, error, searchQuery, setPageNumber };
};
export default useSearchPhotos;
