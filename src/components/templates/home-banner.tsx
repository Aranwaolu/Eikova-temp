import * as React from "react";
import { Box, Spacer, Text } from "@chakra-ui/react";
import NavigationBar from "../organisms/nav";
import SearchBar from "../organisms/search-bar";
import BannerFilter from "../molecules/banner-filter";

interface IHomeBannerProps {}

const HomeBanner: React.FunctionComponent<IHomeBannerProps> = (props) => {
  return (
    <Box
      background="linear-gradient(rgba(36, 13, 73, 0.54), rgba(36, 13, 73, 0.54)), url(/assets/images/header-bg.png)"
      backdropFilter="blur(20px)"
      pos="relative"
      zIndex="9"
    >
      <NavigationBar />
      <Text
        as="h1"
        fontSize="48px"
        lineHeight="52px"
        fontWeight="700"
        color="white"
        textAlign="center"
        fontFamily="Duplicate Sans"
        mt="30px"
        mb="6px"
      >
        The Lord gave the word:
      </Text>
      <Text
        color="white"
        textAlign="center"
        fontSize="18px"
        opacity="0.6"
        fontFamily="Duplicate Sans"
        fontWeight="500"
        mb="46px"
      >
        great was the company of those that published it.
      </Text>
      <SearchBar />
      <Spacer mt="68px" />
      <BannerFilter />
    </Box>
  );
};

export default HomeBanner;
