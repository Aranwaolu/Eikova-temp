import { Box, Button as ChakraButton, Flex, Icon } from "@chakra-ui/react";
import * as React from "react";
import Input from "../atoms/input";
import Button from "../atoms/button";

interface ISearchBarProps {}

const SearchBar: React.FunctionComponent<ISearchBarProps> = (props) => {
  return (
    <Flex h="58px" maxW="856px" mx="auto">
      <ChakraButton
        w="145px"
        h="100%"
        background=" #FFFCF7"
        borderRadius="4px 0px 0px 4px"
        fontSize="14px"
      >
        Filters
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
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9996 13.0001L10.0996 10.1001"
            stroke="#A0A0A0"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Icon>

        <Input
          placeholder="Search photo, persons, event e.t.c."
          pl="55px"
          h="100%"
          fontSize="14px"
          _placeholder={{ color: "text.gray100", fontSize: "14px" }}
          borderRadius="0px 4px 4px 0px"
        />
      </Box>

      <Button
        h="100%"
        w="137px"
        fontSize="14px"
        ml="5px"
        borderRadius="4px"
        variant="primary"
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
