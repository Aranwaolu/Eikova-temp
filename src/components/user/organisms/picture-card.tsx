import { useState } from "react";
import { Box } from "@chakra-ui/react";
import PictureFrame from "../molecules/picture-frame";
import PictureModal from "./picture-modal";

interface IPictureCardProps {
  imageLink: string;
  relatedImages: string[];
}

const PictureCard: React.FunctionComponent<IPictureCardProps> = ({
  imageLink,
  relatedImages,
}) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Box
        as="button"
        display="block"
        w="100%"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <PictureFrame imageLink={imageLink} />
      </Box>
      <PictureModal
        imageLink={imageLink}
        relatedImages={relatedImages}
        closeModal={closeModal}
        showModal={showModal}
      />
    </>
  );
};

export default PictureCard;
