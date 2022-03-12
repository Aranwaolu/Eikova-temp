import { Grid, Img } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import AddMoreUploads from "../organisms/add-more-uploads";

interface IUploadedPicturesGridProps {}

const UploadedPicturesGrid: React.FunctionComponent<
  IUploadedPicturesGridProps
> = (props) => {
  const { pictures } = useContext(PictureFilesContext);
  useEffect(() => {
    console.log("pictureFiles", pictures);
  }, [pictures]);
  return (
    <Grid templateColumns="repeat(2, 1fr)" mt="78px" gap="20px">
      {pictures.links?.map((image) => (
        <Img w="100%" h="100%" objectFit="cover" maxH="450px" src={image} />
      ))}
      {pictures.files && pictures.files.length < 10 ? <AddMoreUploads /> : ""}
    </Grid>
  );
};

export default UploadedPicturesGrid;
