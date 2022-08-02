import { useState } from "react";
import { Box } from "@chakra-ui/react";
import PictureFrame from "../molecules/picture-frame";
import PictureModal from "./picture-modal";

interface IPictureCardProps {
  imageLink: string;
  thumbnail: string;
  title: string;
  description: string;
  relatedImages: string[];
}

const PictureCard: React.FunctionComponent<IPictureCardProps> = ({
  title,
  description,
  imageLink,
  thumbnail,
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
        <PictureFrame thumbnailLink={thumbnail} imageLink={imageLink} />
      </Box>
      <PictureModal
        imageLink={imageLink}
        thumbnailLink={thumbnail}
        relatedImages={relatedImages}
        title={title}
        description={description}
        closeModal={closeModal}
        showModal={showModal}
      />
    </>
  );
};

export default PictureCard;
