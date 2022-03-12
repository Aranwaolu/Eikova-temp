import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import Button from "../../user/atoms/button";
import ContinueButton from "../atoms/continue-button";

interface IAddMoreUploadsProps {}

const AddMoreUploads: React.FunctionComponent<IAddMoreUploadsProps> = (
  props
) => {
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);
  const addMoreOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (pictures.files) {
      event.stopPropagation();
      event.preventDefault();
      let fileList = Array.from(event.dataTransfer.files);
      fileList = fileList.filter(
        (file) =>
          (file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "image/png") && file.size < 5e+6
      );
      if (fileList && fileList.length <= 10 - pictures.files.length) {
        setPictureFiles([...pictures.files, ...fileList]);
      } else {
        alert("You can only upload a maximum of 10 pictures at a time");
      }
    }
  };
  const addMoreOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pictures.files && e.target.files) {
      let newFiles = Array.from(e.target.files);
      newFiles = newFiles.filter(
        (file) =>
        (file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png") && file.size < 5e+6
      );
      if (newFiles && newFiles.length <= 10 - pictures.files.length) {
        setPictureFiles([...pictures.files, ...newFiles]);
      } else {
        alert("You can only upload a maximum of 10 pictures at a time");
      }
    }
  };
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
        onDragOver={(event) => {
          event.stopPropagation();
          event.preventDefault();
          event.dataTransfer.dropEffect = "copy";
        }}
        onDrop={addMoreOnDrop}
      >
        <Input
          display="none"
          id="pictures-upload-more"
          type="file"
          multiple={true}
          accept="image/*"
          onChange={addMoreOnChange}
        />
        <Box
          as="label"
          htmlFor="pictures-upload-more"
          color="text.primary"
          cursor="pointer"
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
        </Box>

        <Text mt="16px" fontSize="18px" fontWeight="500" color="text.gray100">
          Add up to {pictures.files ? 10 - pictures.files?.length : ""} more
          images
        </Text>
      </Flex>
      <ContinueButton />
    </Flex>
  );
};

export default AddMoreUploads;
