import { useContext, useEffect, useState } from "react";
import AdminNav from "../organisms/admin-nav";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Button from "../../user/atoms/button";
import EditPhotoForm from "../organisms/upload-details-form";
import { useParams } from "react-router-dom";
import { getPhoto, updatePhoto } from "../../../services/photos";
import { PicturesDetailsContext } from "../../../contexts/pictures-details-context";
import { IPicturesDetailsContext } from "../../../services/types";

const picturesDetailsDefault = {
  title: "",
  description: "",
  thumbnail: "",
  tags: "",
  meeting: "",
  location: "",
  date: "",
  minister: "",
  songMinister: "",
};
const EditPhoto: React.FC = () => {
  const { image } = useParams<{ image: string }>();
  const [picture, setPicture] = useState(picturesDetailsDefault);
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  const { setPictureDetails, picturesDetails } = useContext(
    PicturesDetailsContext
  );
  useEffect(() => {
    document.title = "Edit picture - Eikova";
    getPhoto(image).then((res) => {
      const data = {
        title: res.data.photo.photo.title,
        description: res.data.photo.photo.description,
        thumbnail: res.data.photo.photo.thumbnail,
        tags: res.data.photo.photo.tags.join(", "),
        meeting: res.data.photo.photo.meeting
          ? res.data.photo.photo.meeting
          : res.data.photo.photo.meeting_id,
        location: res.data.photo.photo.location
          ? res.data.photo.photo.location
          : "",
        date: res.data.photo.photo.updatedAt.slice(0, 10),
        minister: res.data.photo.photo.minister
          ? res.data.photo.photo.minister.join(", ")
          : "",
        songMinister: res.data.photo.photo.minister
          ? res.data.photo.photo.minister.join(", ")
          : "",
      };
      setPicture(data);
      setPictureDetails([data]);
      setLoadingPhoto(false);
    });
  }, [image]);

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
            uploading={false}
            pictureLink={picture.thumbnail}
            activeIndex={0}
            handleUpload={(
              pictureDetail: IPicturesDetailsContext["picturesDetails"][0]
            ) => {
              const taggedPicturedetail = {
                ...pictureDetail,
              };
              if (pictureDetail.minister) {
                taggedPicturedetail.tags =
                  taggedPicturedetail.tags +
                  ", " +
                  taggedPicturedetail.minister;
              }
              if (pictureDetail.songMinister) {
                taggedPicturedetail.tags =
                  taggedPicturedetail.tags +
                  ", " +
                  taggedPicturedetail.songMinister;
              }
              if (pictureDetail.location) {
                taggedPicturedetail.tags =
                  taggedPicturedetail.tags +
                  ", " +
                  taggedPicturedetail.location;
              }
              updatePhoto(image, taggedPicturedetail)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
        )}
      </Box>
    </>
  );
};

export default EditPhoto;
