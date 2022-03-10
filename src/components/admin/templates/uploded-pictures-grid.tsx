import { Grid, Img } from "@chakra-ui/react";
import * as React from "react";
import AddMoreUploads from "../organisms/add-more-uploads";

interface IUploadedPicturesGridProps {}

const UploadedPicturesGrid: React.FunctionComponent<
  IUploadedPicturesGridProps
> = (props) => {
  const images = [
    "/assets/images/picture-card-1.png",
    "/assets/images/picture-card-2.png",
    "/assets/images/picture-card-3.png",
    "/assets/images/picture-card-4.png",
    "/assets/images/picture-card-3.png",
    // "/assets/images/picture-card-4.png",
    // "/assets/images/picture-card-3.png",
    // "/assets/images/picture-card-4.png",
    // "/assets/images/picture-card-3.png",
  ];
  return (
    <Grid templateColumns="repeat(2, 1fr)" mt="78px" gap="20px">
      {images.map((image) => (
        <Img w="100%" src={image} />
      ))}
      {images.length < 10 && <AddMoreUploads />}
    </Grid>
  );
};

export default UploadedPicturesGrid;
