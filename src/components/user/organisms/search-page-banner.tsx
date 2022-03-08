import * as React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import NavigationBar from "./nav";
import SearchBar from "./search-bar";
import BannerFilter from "../molecules/banner-filter";

interface ISearchPageBannerProps {}

const SearchPageBanner: React.FunctionComponent<ISearchPageBannerProps> = (props) => {
  return (
    <Box
      background="linear-gradient(rgba(36, 13, 73, 0.54), rgba(36, 13, 73, 0.54)), url(/assets/images/header-bg.png)"
      backdropFilter="blur(20px)"
      pos="relative"
      zIndex="9"
    >
      <NavigationBar />
      <SearchBar />
      <Spacer mt="68px" />
      <BannerFilter />
    </Box>
  );
};

export default SearchPageBanner;
