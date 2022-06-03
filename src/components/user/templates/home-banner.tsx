import { useState } from "react";
import { Box, Spacer, Text } from "@chakra-ui/react";
import NavigationBar from "../organisms/nav";
import SearchBar from "../organisms/search-bar";
import BannerFilter from "../molecules/banner-filter";
import { useHistory } from "react-router-dom";

interface IHomeBannerProps {
  getActiveIndex: (index: number) => void;
  setSearchQuery: (searchValue: string) => void;
}

const HomeBanner: React.FunctionComponent<IHomeBannerProps> = ({getActiveIndex, setSearchQuery}) => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const onSearch = () => {
    history.push(`/search?query=${searchValue}`);
  };
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
      <SearchBar onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Spacer mt="68px" />
      <BannerFilter getActiveIndex={getActiveIndex} setSearchQuery={setSearchQuery} />
    </Box>
  );
};

export default HomeBanner;
