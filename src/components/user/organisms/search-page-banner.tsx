import * as React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import NavigationBar from "./nav";
import SearchBar from "./search-bar";
import BannerFilter from "../molecules/banner-filter";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface ISearchPageBannerProps {}

const SearchPageBanner: React.FunctionComponent<ISearchPageBannerProps> = (
  props
) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("query") || "";
  const [searchValue, setSearchValue] = useState(searchQuery);
  const history = useHistory();
  const onSearch = () => {
    history.push(`/search?query=${searchValue}`);
  };

  return (
    <Box
      background="linear-gradient(rgba(36, 13, 73, 0.54), rgba(36, 13, 73, 0.54)), url(/assets/images/header-bg.png)"
      backdropFilter="blur(20px)"
      pos="relative"
      zIndex="99"
    >
      <NavigationBar />
      <SearchBar onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Spacer mt="68px" />
      <BannerFilter
        getActiveIndex={(index) => {}}
        setSearchQuery={(searchValue) => {}}
      />
    </Box>
  );
};

export default SearchPageBanner;
