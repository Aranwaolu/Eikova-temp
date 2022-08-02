import { MutableRefObject, useEffect, useRef } from "react";
import { Box, Flex, Grid, Img, Link, Text } from "@chakra-ui/react";
import Button from "../atoms/button";
import PictureFrame from "../molecules/picture-frame";
import CloseModalIcon from "../atoms/close-modal-icon";

interface IPictureModalProps {
  imageLink: string;
  thumbnailLink: string;
  title: string;
  description: string;
  relatedImages: string[];
  showModal: boolean;
  closeModal: () => void;
}

const PictureModal: React.FunctionComponent<IPictureModalProps> = ({
  title,
  description,
  imageLink,
  thumbnailLink,
  relatedImages,
  showModal,
  closeModal,
}) => {
  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    modalRef.current.scrollTop = 0;
  }, [showModal]);
  return (
    <Box display={showModal ? "flex" : "none"}>
      <Flex
        w="100vw"
        h="100vh"
        pos="fixed"
        background="rgba(0, 0, 0, 0.5)"
        top="0"
        left="0"
        backdropFilter="blur(20px)"
        zIndex="101"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          cursor="pointer"
          pos="absolute"
          top="50px"
          right="10%"
          onClick={closeModal}
        >
          <CloseModalIcon />
        </Box>

        <Flex
          ref={modalRef}
          w="70%"
          borderRadius="4px"
          margin="0 auto"
          justifyContent="flex-start"
          flexDir="column"
          bgColor="white"
          overflowY="scroll"
          overflowX="visible"
          height="calc(100vh - 50px)"
          pos="relative"
          zIndex="9999"
          // p="20px 0"
        >
          <Flex
            bgColor="#FFF8EC"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            p="20px 0"
          >
            <Img
              w="75%"
              height="600px"
              objectFit="cover"
              objectPosition="center"
              src={imageLink}
              borderRadius="4px"
            />

            <Text mt="10px" fontSize="18px" fontWeight="500">
              {title}
            </Text>
            <Text mt="10px" fontSize="16px" fontWeight="400">
              {description}
            </Text>
            <Link
              _hover={{ textDecoration: "none" }}
              href={imageLink}
              download
              // display="block"
              mt="28px"
              w="75%"
            >
              <Button variant="primary" h="48px" borderRadius="4px">
                Download
              </Button>
            </Link>
          </Flex>

          <Box mb="30px">
            <Text
              m="62px auto 22px"
              textAlign="center"
              fontSize="18px"
              fontWeight="500"
              height="auto"
            >
              Related Photos
            </Text>
            <Grid w="75%" mx="auto" templateColumns="repeat(2, 1fr)" gap="22px">
              {relatedImages.map((image) => (
                <PictureFrame
                  key={image}
                  imageLink={image}
                  thumbnailLink={image}
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PictureModal;
