import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SearchPageBanner from "../organisms/search-page-banner";
import FilterBox from "../organisms/filter-box";
import PictureGrid from "../templates/picture-grid";
import { useSearchPhotos } from "../../../hooks";
import Pagination from "../../admin/molecules/pagination";
import "../../../style-config/pagination.css";

interface ISearchPageProps {}

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
  const { searchResults, loading, error, searchQuery, setPageNumber } =
    useSearchPhotos();

  return (
    <Box>
      <SearchPageBanner />
      <Flex p="35px 100px" gap="20px" pos="relative">
        <FilterBox />
        <Box w="100%">
          <Box>
            <Text
              fontSize="18px"
              pb="23px"
              mb="35px"
              borderBottom="1px solid #ECECEC"
            >
              <Text
                as="span"
                fontSize="22px"
                fontWeight="500"
                marginRight="8px"
              >
                {searchResults.length}
              </Text>{" "}
              Photos of ‘
              <Text as="span" fontStyle="italic">
                {searchQuery}
              </Text>
              ’
            </Text>
          </Box>
          <PictureGrid photos={searchResults} loading={loading} />
          {!!error && <Text>{error}</Text>}
          {!error && searchResults.length > 20 && (
            <Box w="100%">
              <Pagination pageCount={10} setPage={setPageNumber} />
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchPage;
