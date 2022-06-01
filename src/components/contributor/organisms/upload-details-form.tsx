import { Box, Input, Img, Text, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PicturesDetailsContext } from "../../../contexts/pictures-details-context";
import { IPicturesDetailsContext } from "../../../services/types";
import Button from "../../user/atoms/button";
import ImageDetailInput from "../molecules/image-detail-input";

interface IUploadDetailsFormProps {
  pictureLink: string;
  activeIndex: number;
  uploading: boolean;
  error: string;
  handleUpload: (
    pictureDetail: IPicturesDetailsContext["picturesDetails"][0]
  ) => void;
}
const UploadDetailsForm: React.FC<IUploadDetailsFormProps> = ({
  pictureLink,
  activeIndex,
  handleUpload,
  uploading,
  error,
}) => {
  const { picturesDetails, setPictureDetails } = useContext(
    PicturesDetailsContext
  );

  const [details, setDetails] = useState(picturesDetails[activeIndex]);
  const [enablePublish, setEnablePublish] = useState(false);
  useEffect(() => {
    if (
      details.date &&
      details.description &&
      details.location &&
      details.meeting &&
      details.tags &&
      details.title
    ) {
      setEnablePublish(true);
    } else {
      setEnablePublish(false);
    }
  }, [details]);
  //   Update picturesDetails state with form data
  useEffect(() => {
    const store = [...picturesDetails];
    store[activeIndex] = details;
    setPictureDetails(store);
  }, [details]);

  // useEffect(() => {
  //   setDetails(picturesDetails[activeIndex]);
  // }, [picturesDetails]);

  useEffect(() => {
    setDetails(picturesDetails[activeIndex]);
  }, [activeIndex]);
  return (
    <Box maxW="850px" mx="auto" mt="50px">
      <Input
        placeholder="Input the image title"
        name="title"
        value={details.title}
        onChange={(e) => {
          setDetails({ ...details, title: e.target.value });
        }}
        px="30px"
        fontSize="36px"
        fontWeight="700"
        border="none"
        _placeholder={{ color: "text.gray200" }}
        _focus={{ outline: "none" }}
      />
      <Img w="100%" mt="48px" src={pictureLink} />
      <Input
        fontSize="24px"
        fontWeight="500"
        px="30px"
        mt="48px"
        placeholder="Input the image description here"
        border="none"
        name="description"
        value={details.description}
        onChange={(e) => {
          setDetails({ ...details, description: e.target.value });
        }}
        _placeholder={{ color: "text.gray200" }}
        _focus={{ outline: "none" }}
      />
      <ImageDetailInput
        title="Tags"
        sideNote="(Minimum 10)"
        suggestions={["Bible", "Rev", "Kayode", "Sitting", "Praying", "Stood"]}
        value={details.tags}
        setValue={(value: string) => {
          setDetails({ ...details, tags: value });
        }}
      />
      <ImageDetailInput
        title="Meeting"
        placeholder="Add meeting..."
        sideNote="(Minimum 1)"
        suggestions={["SOS", "PM", "LSC", "BECON", "WTV", "ANAMNESIS"]}
        value={details.meeting}
        setValue={(value: string) => {
          setDetails({ ...details, meeting: value });
        }}
      />
      <ImageDetailInput
        title="Location"
        placeholder="Add location..."
        suggestions={[
          "KOSOFE",
          "NOIC",
          "FAITH PLAZA",
          "TEA HOUSE",
          "GBAGADA",
          "OTHERS",
        ]}
        value={details.location}
        setValue={(value: string) => {
          setDetails({ ...details, location: value });
        }}
      />
      <ImageDetailInput
        title="Date"
        sideNote="(Year & Month)"
        type="date"
        suggestions={[
          "KOSOFE",
          "NOIC",
          "FAITH PLAZA",
          "TEA HOUSE",
          "GBAGADA",
          "OTHERS",
        ]}
        value={details.date}
        setValue={(value: string) => {
          setDetails({ ...details, date: value });
        }}
      />
      <ImageDetailInput
        title="Ministers of the Word"
        sideNote="(Select 1 Minimum)"
        placeholder="Add ministers..."
        suggestions={[
          "Rev Kayode Oyegoke",
          "Rev (Mrs) Helen Oyegoke",
          "Pst Emeka Egwuchukwu",
        ]}
        value={details.minister}
        setValue={(value: string) => {
          setDetails({ ...details, minister: value });
        }}
      />
      <ImageDetailInput
        title="Song Minister"
        sideNote="(Select 1 Minimum)"
        placeholder="Add ministers..."
        suggestions={[
          "Bro Lanre Awosika",
          "Sis Ola Oseni",
          "Bro Yomi",
          "Pst Alfred",
          "Sis Maria",
          "Sis Favour",
        ]}
        value={details.songMinister}
        setValue={(value: string) => {
          setDetails({ ...details, songMinister: value });
        }}
      />
      <Button
        display="flex"
        gap="20px"
        opacity={enablePublish ? "1" : "0.5"}
        variant="primary"
        mt="95px"
        fontSize="18px"
        fontWeight="500"
        disabled={!enablePublish}
        onClick={() => {
          const store = [...picturesDetails];
          store[activeIndex] = details;
          // setPictureDetails(store);
          handleUpload(store[activeIndex]);
          setDetails(picturesDetails[activeIndex]);
        }}
      >
        {uploading ? "Publishing" : "Publish now"}
        {uploading ? <Spinner /> : ""}
      </Button>
      {error && <Text color="red">{error}</Text>}
    </Box>
  );
};

export default UploadDetailsForm;
