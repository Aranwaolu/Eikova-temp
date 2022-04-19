import * as React from "react";
import { Box, Img, Link } from "@chakra-ui/react";
import DownloadIcon from "../atoms/download-icon";

interface IPictureFrameProps {
  imageLink: string;
}

const PictureFrame: React.FunctionComponent<IPictureFrameProps> = ({
  imageLink,
}) => {
  return (
    <Box borderRadius="4px" overflow="hidden" pos="relative">
      <Img w="100%" h="268px" objectFit="cover" src={imageLink} pos="relative" />
      <Box
        height="100%"
        width="100%"
        position="absolute"
        background="linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 31.22%)"
        top="0"
      ></Box>
      <Link
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
