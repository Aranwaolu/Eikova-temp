import { useContext, useEffect } from "react";
import AdminNav from "../organisms/admin-nav";
import { Box, Flex } from "@chakra-ui/react";
import Button from "../../user/atoms/button";
import UploadedPicturesGrid from "../templates/uploded-pictures-grid";
import EmptyUpload from "../templates/empty-upload";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import ContinueButton from "../atoms/continue-button";

const Upload: React.FC = () => {
  const { pictures } = useContext(PictureFilesContext);

  useEffect(() => {
    document.title = "Upload pictures - Eikova";
  }, []);
  return (
    <>
      <AdminNav />
      <Box px="100px" pt="80px" pb="150px">
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
              opacity="0.5"
            >
              Publish now
            </Button>
          </Flex>
        </Flex>
        {pictures.files !== null && pictures.files.length > 0 ? (
          <UploadedPicturesGrid />
        ) : (
          <EmptyUpload />
        )}
        {pictures.files !== null && pictures.files.length === 10 ? (
          <ContinueButton />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Upload;
