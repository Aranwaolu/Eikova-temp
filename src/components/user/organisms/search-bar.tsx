import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button as ChakraButton,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import Input from "../atoms/input";
import Button from "../atoms/button";
import SearchBarFilter from "./search-bar-filter";

interface ISearchBarProps {
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
  onSearchValueChange,
  onSearch,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current !== null) {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
          setShowFilter(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box pos="relative" maxW="856px" mx="auto" ref={filterRef}>
      <Flex
        as="form"
        h="58px"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ChakraButton
          w="145px"
          h="100%"
          background=" #FFFCF7"
          borderRadius="4px 0px 0px 4px"
          fontSize="14px"
          display="flex"
          _focus={{ border: "none" }}
          onClick={() => {
            setShowFilter(true);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="4.90909" fill="#FFEED1" />
            <path
              d="M13.0909 5.64551H4.90909L8.18182 9.51551V12.191L9.81818 13.0091V9.51551L13.0909 5.64551Z"
              stroke="#7B4B36"
              strokeWidth="0.818182"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Text mr="22px" ml="8px" lineHeight="14px" fontWeight="400">
            Filters
          </Text>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 1L4.25 4.25L0.999999 1"
              stroke="black"
              strokeWidth="0.928572"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ChakraButton>
        <Box flexGrow="1" pos="relative">
          <Icon
            pos="absolute"
            left="33px"
            top="50%"
            transform="translateY(-50%)"
            width="14px"
            height="14px"
            zIndex={9}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38781 9.27885 1 6.33333 1C3.38781 1 1 3.38781 1 6.33333C1 9.27885 3.38781 11.6667 6.33333 11.6667Z"
              stroke="#A0A0A0"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9996 13.0001L10.0996 10.1001"
              stroke="#A0A0A0"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>

          <Input
            placeholder="Search photo, persons, event e.t.c."
            pl="55px"
            h="100%"
            fontSize="14px"
            _placeholder={{ color: "text.gray100", fontSize: "14px" }}
            borderRadius="0px 4px 4px 0px"
            onChange={(e) => {
              e.preventDefault();
              onSearchValueChange(e.target.value);
            }}
          />
        </Box>

        <Button
          h="100%"
          w="137px"
          fontSize="14px"
          ml="5px"
          borderRadius="4px"
          variant="primary"
          type="submit"
          onClick={onSearch}
        >
          Search
        </Button>
      </Flex>
      <Box
        pos="absolute"
        top="79px"
        zIndex="99"
        display={showFilter ? "block" : "none"}
      >
        <SearchBarFilter />
      </Box>
    </Box>
  );
};

export default SearchBar;
