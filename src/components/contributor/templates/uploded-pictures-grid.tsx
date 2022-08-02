import { Box, Grid, Img } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import AddMoreUploads from "../organisms/add-more-uploads";

interface IUploadedPicturesGridProps {}

const UploadedPicturesGrid: React.FunctionComponent<
  IUploadedPicturesGridProps
> = (props) => {
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);
  useEffect(() => {
    console.log("pictureFiles", pictures);
  }, [pictures]);
  return (
    <Grid templateColumns="repeat(2, 1fr)" mt="78px" gap="20px">
      {pictures.links?.map((image, index) => (
        <Box key={image} pos="relative" role="group">
          <Img
            key={image}
            w="100%"
            h="100%"
            objectFit="cover"
            maxH="450px"
            src={image}
          />
          <Box
            as="button"
            pos="absolute"
            top="20px"
            right="30px"
            transform="scale(0)"
            transition="all .3s"
            _groupHover={{ transform: "scale(1)" }}
            onClick={() => {
              if (pictures.files) {
                const pictureFilesDuplicate = [...pictures.files];
                pictureFilesDuplicate.splice(index, index + 1);
                setPictureFiles(pictureFilesDuplicate);
              }
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.5" />
              <path
                d="M15.243 15.243L20.486 20.486M10 20.486L15.243 15.243L10 20.486ZM20.486 10L15.242 15.243L20.486 10ZM15.242 15.243L10 10L15.242 15.243Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
      ))}
      {pictures.files && pictures.files.length < 10 ? <AddMoreUploads /> : ""}
    </Grid>
  );
};

export default UploadedPicturesGrid;
