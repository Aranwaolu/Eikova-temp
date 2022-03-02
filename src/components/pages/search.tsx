import * as React from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import SearchPageBanner from "../organisms/search-page-banner";
import FilterBox from "../organisms/filter-box";
import PictureGrid from "../templates/picture-grid";

interface ISearchPageProps {}

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get('query');

  return (
    <Box>
      <SearchPageBanner />
      <Flex p="35px 100px">
        <FilterBox />
        <Box ml="20px">
          <Box>
            <Text
              fontSize="18px"
              pb="23px"
              mb="35px"
              borderBottom="1px solid #ECECEC"
            >
              <Text as="span" fontSize="24px" fontWeight="500">
                2,965
              </Text>{" "}
              Photos of ‘
              <Text as="span" fontStyle="italic">
                {searchQuery}
              </Text>
              ’
            </Text>
          </Box>
          <PictureGrid />
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchPage;
