import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import Button from "../../user/atoms/button";

interface IAddMoreUploadsProps {}

const AddMoreUploads: React.FunctionComponent<IAddMoreUploadsProps> = (
  props
) => {
  return (
    <Flex flexDir="column">
      <Flex
        minH="260px"
        flexGrow="1"
        border="0.509012px dashed #8F8F8F"
        borderRadius="8.14419px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24.8765" cy="24.6636" r="24" fill="#AD7F33" />
          <path
            d="M26.8976 22.6425H32.9612C33.4973 22.6425 34.0114 22.8554 34.3904 23.2345C34.7695 23.6135 34.9824 24.1276 34.9824 24.6637C34.9824 25.1998 34.7695 25.7139 34.3904 26.0929C34.0114 26.472 33.4973 26.6849 32.9612 26.6849H26.8976V32.7486C26.8976 33.2846 26.6846 33.7987 26.3056 34.1778C25.9265 34.5568 25.4124 34.7698 24.8763 34.7698C24.3403 34.7698 23.8262 34.5568 23.4471 34.1778C23.0681 33.7987 22.8551 33.2846 22.8551 32.7486V26.6849H16.7915C16.2554 26.6849 15.7413 26.472 15.3623 26.0929C14.9832 25.7139 14.7703 25.1998 14.7703 24.6637C14.7703 24.1276 14.9832 23.6135 15.3623 23.2345C15.7413 22.8554 16.2554 22.6425 16.7915 22.6425H22.8551V16.5788C22.8551 16.0428 23.0681 15.5287 23.4471 15.1496C23.8262 14.7706 24.3403 14.5576 24.8763 14.5576C25.4124 14.5576 25.9265 14.7706 26.3056 15.1496C26.6846 15.5287 26.8976 16.0428 26.8976 16.5788V22.6425Z"
            fill="white"
          />
        </svg>
        <Text mt="16px" fontSize="18px" fontWeight="500" color="text.gray100">
          Add up to 9 more images
        </Text>
      </Flex>
      <Button
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="primary"
        fontSize="18px"
        fontWeight="500"
        mt="20px"
        __css={{ svg: { ml: "16px" } }}
      >
        Continue with details
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.86918 15.8872L8.63668 17.6547L17.0204 9.27096L8.63668 0.887207L6.86918 2.65471L12.2354 8.02096H0.25293V10.521H12.2354L6.86918 15.8872Z"
            fill="white"
          />
        </svg>
      </Button>
    </Flex>
  );
};

export default AddMoreUploads;
