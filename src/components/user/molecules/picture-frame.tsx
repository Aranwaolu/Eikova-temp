import * as React from "react";
import { Box, Img, Link } from "@chakra-ui/react";
import DownloadIcon from "../atoms/download-icon";

interface IPictureFrameProps {
  thumbnailLink: string;
  imageLink: string;
}

const PictureFrame: React.FunctionComponent<IPictureFrameProps> = ({
  thumbnailLink,
  imageLink,
}) => {
  return (
    <Box borderRadius="4px" overflow="hidden" pos="relative" role="group">
      <Img
        w="100%"
        h="268px"
        objectFit="cover"
        src={thumbnailLink}
        pos="relative"
      />
      <Box
        display="none"
        _groupHover={{ display: "block" }}
        height="100%"
        width="100%"
        position="absolute"
        background="linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 31.22%)"
        top="0"
      ></Box>
      <Link
        display="none"
        _groupHover={{ display: "block" }}
        pos="absolute"
        bottom="11px"
        right="11px"
        bg="none"
        _focus={{ background: "none", border: "none" }}
        href={imageLink}
        download
      >
        <DownloadIcon />
      </Link>
    </Box>
  );
};

export default PictureFrame;
