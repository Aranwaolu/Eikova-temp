import * as React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import NavigationBar from "./nav";
import SearchBar from "./search-bar";
import BannerFilter from "../molecules/banner-filter";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchPhotos } from "../../../services/filter";

interface ISearchPageBannerProps {}

const SearchPageBanner: React.FunctionComponent<ISearchPageBannerProps> = (
  props
) => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("query") || "";
  const [searchValue, setSearchValue] = useState(searchQuery);

  const onSearch = () => {
    console.log(searchValue);
    history.push(`/search?query=${searchValue}`);
    searchPhotos(searchValue)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      background="linear-gradient(rgba(36, 13, 73, 0.54), rgba(36, 13, 73, 0.54)), url(/assets/images/header-bg.png)"
      backdropFilter="blur(20px)"
      pos="relative"
      zIndex="9"
    >
      <NavigationBar />
      <SearchBar onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Spacer mt="68px" />
      <BannerFilter getActiveIndex={(index) => {}} />
    </Box>
  );
};

export default SearchPageBanner;
