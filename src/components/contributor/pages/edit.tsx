import AdminNav from "../organisms/admin-nav";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import Button from "../../user/atoms/button";
import EditPhotoForm from "../organisms/upload-details-form";
import UploadSuccessModal from "../molecules/upload-success-modal";
import { useEditPhoto } from "../../../hooks";

const EditPhoto: React.FC = () => {
  const {
    handleEdit,
    picture,
    error,
    loadingPhoto,
    uploading,
    openSuccessModal,
    onSuccessModalClose,
  } = useEditPhoto();
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
            {/* <Button
              variant="primary"
              minW="162px"
              h="53px"
              fontSize="18px"
              fontWeight="500"
              opacity={"0.5"}
              disabled={true}
              onClick={() => {
                // console.log(picturesDetails);
              }}
            >
              Publish All Images
            </Button> */}
          </Flex>
        </Flex>
        {loadingPhoto ? (
          <Flex h="500px" w="100%" justifyContent="center" alignItems="center">
            <Spinner h="50px" w="50px" thickness="5px" />
          </Flex>
        ) : (
          <EditPhotoForm
            error=""
            uploading={uploading}
            pictureLink={picture.thumbnail}
            activeIndex={0}
            handleUpload={handleEdit}
          />
        )}
        {!!error && <Text color="red">{error}</Text>}
      </Box>
      <UploadSuccessModal
        isOpen={openSuccessModal}
        onClose={onSuccessModalClose}
      />
    </>
  );
};

export default EditPhoto;
