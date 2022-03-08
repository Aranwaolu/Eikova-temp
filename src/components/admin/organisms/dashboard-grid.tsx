import {Grid, Img} from "@chakra-ui/react";

interface IDashboardGridProps {
  images: string[];
}

const DashboardGrid: React.FC<IDashboardGridProps> = ({images}) => {
  return (<Grid templateColumns="repeat(4, 1fr)" mt="36px" mb="40px" gap="20px">
    {images.map((image) => (
      <Img key={image} src={image} w="100%" borderRadius="3.75831px"/>
    ))}
  </Grid>);
}
export default DashboardGrid;
