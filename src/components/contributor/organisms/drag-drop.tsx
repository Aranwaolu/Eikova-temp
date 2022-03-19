import { Box, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";

interface IDragDropProps {}

const DragDrop: React.FunctionComponent<IDragDropProps> = (props) => {
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);
  const dragOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    let fileList = Array.from(event.dataTransfer.files);
    fileList = fileList.filter(
      (file) =>
        (file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "image/png") &&
        file.size < 5e6
    );
    const length = pictures.files?.length || 0;
    if (fileList.length <= 10 - length) {
      setPictureFiles(fileList);
    } else {
      alert("You can only upload a maximum of 10 pictures at a time");
    }
  };
  const dragOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = pictures.files?.length || 0;
    if (e.target.files && e.target.files.length <= 10 - length) {
      let fileList = Array.from(e.target.files);
      fileList = fileList.filter(
        (file) =>
          (file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png") &&
          file.size < 5e6
      );
      setPictureFiles(fileList);
    } else {
      alert("You can only upload a maximum of 10 pictures at a time");
    }
  };
  return (
    <>
      <Box
        onDragOver={(event) => {
          event.stopPropagation();
          event.preventDefault();
          event.dataTransfer.dropEffect = "copy";
        }}
        onDrop={dragOnDrop}
        display="block"
        mt="48px"
        border="1px dashed #8F8F8F"
        borderRadius="16px"
        mx="auto"
        __css={{ svg: { mx: "auto" } }}
        maxW="850px"
        py="130px"
      >
        <Input
          display="none"
          id="pictures-upload"
          type="file"
          multiple={true}
          accept="image/*"
          onChange={dragOnChange}
        />
        <svg
          width="120"
          height="121"
          viewBox="0 0 120 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95 10.2017H25C16.7258 10.2258 10.0242 16.9274 10 25.2017V69.5017L29.4 50.1017C35.3374 44.4517 44.6627 44.4517 50.6 50.1017L64.957 64.5367L69.3946 60.0991C75.2618 54.266 84.7383 54.266 90.6055 60.0991L110 79.4937V25.2017C109.976 16.9274 103.274 10.2258 95 10.2017Z"
            fill="#FFF4E3"
          />
          <path
            d="M50.6 50.1008C44.6627 44.4508 35.3374 44.4508 29.4 50.1008L10 69.5008V95.2008C10.0242 103.475 16.7258 110.177 25 110.201H95C99.0756 110.199 102.975 108.538 105.8 105.601L50.6 50.1008Z"
            fill="#ECD8B7"
          />
          <path
            d="M110 79.4934L90.6052 60.0989C84.7379 54.2659 75.2615 54.2659 69.3943 60.0989L64.9567 64.5364L105.778 105.579C108.489 102.805 110.004 99.0798 110 95.2014V79.4934Z"
            fill="#FFE7C0"
          />
        </svg>
        <Text
          textAlign="center"
          mt="42px"
          color="text.gray100"
          fontSize="24px"
          fontWeight="500"
        >
          Drag and drop up to 10 images, or{" "}
          <Text
            as="label"
            htmlFor="pictures-upload"
            color="text.primary"
            cursor="pointer"
          >
            Browse
          </Text>
        </Text>
        <Text textAlign="center" color="text.gray100" mt="8px" fontSize="18px">
          Supported files formats: png and jpg. Max 5MB each
        </Text>
      </Box>
    </>
  );
};

export default DragDrop;
