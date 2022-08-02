import { Grid, Skeleton } from "@chakra-ui/react";
import PictureCard from "../organisms/picture-card";

interface IPictureGridProps {
  photos: {
    thumbnail: string;
    url: string;
    title: string;
    description: string;
  }[];
  loading: boolean;
}

const PictureGrid: React.FunctionComponent<IPictureGridProps> = ({
  photos,
  loading,
}) => {
  const relatedImages = [
    "/assets/images/picture-card-2.png",
    "/assets/images/picture-card-3.png",
    "/assets/images/picture-card-4.png",
    "/assets/images/picture-card-5.png",
  ];
  const skeletonCount = [1, 2, 3, 4, 5, 6];

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="20px" column="3">
      {loading
        ? skeletonCount.map((image) => <Skeleton h="268px" key={image} />)
        : photos?.map((photo) => (
            <PictureCard
              key={photo.url}
              relatedImages={relatedImages}
              thumbnail={photo.thumbnail}
              imageLink={photo.url}
              title={photo.title}
              description={photo.description}
            />
          ))}
    </Grid>
  );
};

export default PictureGrid;
