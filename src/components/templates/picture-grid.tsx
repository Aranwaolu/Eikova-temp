import * as React from "react";
import { Grid } from "@chakra-ui/react";
import PictureCard from "../organisms/picture-card";

interface IPictureGridProps {}

const PictureGrid: React.FunctionComponent<IPictureGridProps> = (props) => {
  const relatedImages = [
    "/assets/images/picture-card-2.png",
    "/assets/images/picture-card-3.png",
    "/assets/images/picture-card-4.png",
    "/assets/images/picture-card-5.png",
  ];
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="22px">
      <Grid gap="20px">
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-1.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-2.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-7.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-10.png"
        />
      </Grid>
      <Grid gap="20px">
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-3.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-4.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-8.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-11.png"
        />
      </Grid>
      <Grid gap="20px">
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-5.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-6.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-9.png"
        />
        <PictureCard
          relatedImages={relatedImages}
          imageLink="/assets/images/picture-card-12.png"
        />
      </Grid>
    </Grid>
  );
};

export default PictureGrid;
