import * as React from "react";
import { Flex } from "@chakra-ui/react";

const CloseModalIcon: React.FunctionComponent = (props) => {
  return (
    <Flex
      h="37px"
      w="37px"
      bgColor="white"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13"
          stroke="#AD7F33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L13 13"
          stroke="#AD7F33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Flex>
  );
};

export default CloseModalIcon;
