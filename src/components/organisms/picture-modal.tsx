import { MutableRefObject, useEffect, useRef } from "react";
import { Box, Flex, Grid, Img, Link, Text } from "@chakra-ui/react";
import Button from "../atoms/button";
import PictureFrame from "../molecules/picture-frame";
import CloseModalIcon from "../atoms/close-modal-icon";

interface IPictureModalProps {
  imageLink: string;
  relatedImages: string[];
  showModal: boolean;
  closeModal: () => void;
}

const PictureModal: React.FunctionComponent<IPictureModalProps> = ({
  imageLink,
  relatedImages,
  showModal,
  closeModal,
}) => {
  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    modalRef.current.scrollTop = 0;
  }, [showModal]);
  return (
    <Box
      w="100vw"
      h="100vh"
      pos="fixed"
        background="rgba(0, 0, 0, 0.5)"
      top="0"
      left="0"
      backdropFilter="blur(20px)"
      zIndex="99"
      display={showModal ? "flex" : "none"}
    >
      <Box
        cursor="pointer"
        pos="absolute"
        top="105px"
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
        justifyContent="center"
        flexDir="column"
        bgColor="white"
        overflowY="scroll"
        overflowX="visible"
        h="calc(100% - 161px)"
        pb="100px"
        pt="65px"
        pos="relative"
        mt="auto"
      >
        <Flex
          pt="710px"
          bgColor="#FFF8EC"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Img w="75%" src={imageLink} borderRadius="4px" />
          <Link
            _hover={{ textDecoration: "none" }}
            href={imageLink}
            download
            // display="block"
            mt="28px"
            mb="50px"
            w="75%"
          >
            <Button variant="primary" h="48px" borderRadius="4px">
              Download
            </Button>
          </Link>
        </Flex>
        <Box>
          <Text
            w="75%"
            m="62px auto 22px"
            textAlign="left"
            fontSize="18px"
            fontWeight="500"
          >
            Related Photos
          </Text>
          <Grid w="75%" mx="auto" templateColumns="repeat(2, 1fr)" gap="22px">
            {relatedImages.map((image) => (
              <PictureFrame key={image} imageLink={image} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default PictureModal;
