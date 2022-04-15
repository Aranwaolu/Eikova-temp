import { useContext, useEffect, useState } from "react";
import AdminNav from "../organisms/admin-nav";
import { Box, Flex } from "@chakra-ui/react";
import Button from "../../user/atoms/button";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import UploadArrow from "../molecules/upload-arrows";
import UploadDetailsForm from "../organisms/upload-details-form";
import { PicturesDetailsContext } from "../../../contexts/pictures-details-context";

const UploadDetails: React.FC = () => {
  const { pictures } = useContext(PictureFilesContext);
  const { picturesDetails } = useContext(PicturesDetailsContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [enablePublish, setEnablePublish] = useState(false);

  useEffect(() => {
    document.title = "Upload pictures - Eikova";
  }, []);

  useEffect(() => {
    picturesDetails.forEach((details) => {
      if (
        details.date &&
        details.description &&
        details.location &&
        details.meeting &&
        details.tags &&
        details.title
      ) {
        setEnablePublish(true);
      } else {
        setEnablePublish(false);
      }
    });
  }, [picturesDetails]);
  return (
    <>
      <AdminNav />
      <Box mx="100px" pt="80px" pb="150px" pos="relative">
        <Flex justifyContent="space-between">
          <Button
            variant="primary"
            bgColor="text.gray150"
            w="120px"
            h="53px"
            fontSize="18px"
            color="black"
            fontWeight="500"
          >
            Cancel
          </Button>
          <Flex>
            <Button
              variant="primary"
              bgColor="text.gray150"
              minW="172px"
              h="53px"
              fontSize="18px"
              color="black"
              fontWeight="500"
              opacity="0.5"
              mr="24px"
            >
              Save as Draft
            </Button>
            <Button
              variant="primary"
              minW="162px"
              h="53px"
              fontSize="18px"
              fontWeight="500"
              opacity={enablePublish ? "1" : "0.5"}
              // disabled={!enablePublish}
              onClick={() => {
                console.log(picturesDetails);
              }}
            >
              Publish All Images
            </Button>
          </Flex>
        </Flex>
        {pictures.files && pictures.files.length > 1 && (
          <UploadArrow
            nextDisable={
              pictures.files && activeIndex >= pictures.files.length - 1
            }
            onNexClick={() => {
              if (pictures.files && activeIndex < pictures.files.length - 1) {
                setActiveIndex(activeIndex + 1);
              }
            }}
            prevDisable={activeIndex === 0}
            onPrevClick={() => {
              if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
              }
            }}
          />
        )}
        <UploadDetailsForm
          pictureLink={pictures.links ? pictures.links[activeIndex] : ""}
          activeIndex={activeIndex}
        />
      </Box>
    </>
  );
};

export default UploadDetails;
