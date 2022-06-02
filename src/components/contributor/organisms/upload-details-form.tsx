import { Box, Input, Img, Text, Flex, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PicturesDetailsContext } from "../../../contexts/pictures-details-context";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
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
  const { pictures, setPictureFiles } = useContext(PictureFilesContext);

  const [details, setDetails] = useState(picturesDetails[activeIndex]);
  const [enablePublish, setEnablePublish] = useState(false);
  useEffect(() => {
    if (
      details.date &&
      details.description &&
      // details.location &&
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

  const params = useParams<{ image: string }>();
  console.log("params", params);

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
      <Box pos="relative" role="group">
        <Img w="100%" mt="48px" src={pictureLink} />
        <Flex
          display={params.image ? "none" : "block"}
          cursor="pointer"
          zIndex="2"
          transform="scale(0)"
          transition="all .2s"
          _groupHover={{ transform: "scale(1)" }}
          justifyContent="center"
          alignItems="center"
          gap="8px"
          fontSize="18px"
          color="white"
          background="rgba(0, 0, 0, 0.5)"
          borderRadius="5px"
          pos="absolute"
          top="20px"
          right="20px"
          w="163px"
          h="48px"
          as="label"
          htmlFor="replace"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_353_2034)">
              <path
                d="M5.14095 12.6813C4.81451 13.0156 4.51163 13.3285 4.20447 13.6378C3.43085 14.4157 2.65223 15.1879 1.88576 15.9729C1.79431 16.0736 1.74054 16.2028 1.73361 16.3387C1.7186 16.9901 1.72432 17.6423 1.72718 18.2938C1.72718 18.8874 2.04362 19.2046 2.6358 19.2053C4.03446 19.2053 5.43383 19.2053 6.83248 19.2053C7.39966 19.2053 7.7404 19.5667 7.71397 20.116C7.69182 20.5682 7.38823 20.9075 6.93606 20.9111C5.4124 20.9225 3.88731 20.9539 2.36436 20.8997C1.00713 20.8511 0.0206444 19.7317 0.0163584 18.3281C0.0092151 16.0158 0.0163584 13.7035 0.0163584 11.3912C0.0163584 8.57868 0.0163584 5.76637 0.0163584 2.95429C0.0163584 1.78136 0.668541 0.832736 1.72003 0.495573C2.01631 0.401905 2.32508 0.353735 2.6358 0.352707C7.73135 0.344135 12.8281 0.342469 17.926 0.347707C19.4582 0.347707 20.5376 1.42706 20.5462 2.95644C20.5524 4.08174 20.5524 5.20681 20.5462 6.33164C20.5426 6.97882 20.0047 7.35599 19.3911 7.15526C19.0339 7.03954 18.8396 6.75595 18.8382 6.33164C18.8382 5.24229 18.8382 4.15294 18.8382 3.06358C18.8382 2.34926 18.5525 2.06352 17.8324 2.06352C12.7988 2.06352 7.76468 2.06352 2.73009 2.06352C2.01577 2.06352 1.73003 2.34926 1.73003 3.07001C1.73003 6.50736 1.73003 9.94447 1.73003 13.3813V13.7007C1.8329 13.6056 1.9029 13.5464 1.9679 13.4814C2.79986 12.6494 3.63158 11.816 4.46306 10.9812C4.93594 10.5083 5.37311 10.5112 5.85028 10.9891C6.46675 11.6062 7.08179 12.2248 7.70754 12.8556C7.79326 12.7749 7.8654 12.7127 7.93255 12.6413C9.33168 11.2422 10.7299 9.84232 12.1271 8.44176C12.6385 7.92959 13.0557 7.93031 13.5715 8.44176C14.0872 8.95322 14.6215 9.4854 15.138 10.0133C15.5259 10.4119 15.5009 10.9476 15.0958 11.2841C14.748 11.5734 14.3015 11.5591 13.9608 11.2269C13.5907 10.8698 13.235 10.494 12.8621 10.1154C12.7678 10.204 12.6964 10.2676 12.6285 10.3354L8.43401 14.5436C7.92398 15.055 7.50538 15.0522 6.99035 14.5357C6.38531 13.93 5.78171 13.3235 5.14095 12.6813Z"
                fill="white"
              />
              <path
                d="M23.9847 12.3536C23.9761 13.115 23.6276 13.8965 22.9704 14.5523C20.165 17.3619 17.3634 20.1738 14.5656 22.9878C14.2728 23.304 13.8839 23.5149 13.4591 23.5878C12.2061 23.8128 10.9589 24.0835 9.71314 24.3243C9.32883 24.3957 8.96738 24.2914 8.72808 23.9835C8.60307 23.8151 8.54642 23.6056 8.5695 23.3971C8.82999 21.9765 9.11215 20.56 9.41598 19.1475C9.47478 18.915 9.59578 18.7029 9.766 18.5339C12.6443 15.6347 15.5292 12.7419 18.4208 9.85556C18.876 9.39667 19.4583 9.08477 20.0926 8.96011C20.7268 8.83545 21.3839 8.90377 21.9789 9.15623C23.2032 9.67555 23.9883 10.8606 23.9847 12.3536ZM20.1466 14.968L17.9129 12.715C17.8618 12.7883 17.8059 12.8582 17.7458 12.9243C15.7956 14.8816 13.8605 16.8531 11.8804 18.7818C11.3004 19.3461 10.8911 19.9247 10.8282 20.7533C10.7875 21.2877 10.6432 21.8141 10.5425 22.377C11.3947 22.2184 12.2076 22.0756 13.0155 21.9091C13.1849 21.871 13.3404 21.7867 13.4648 21.6655C15.6502 19.4887 17.8303 17.3074 20.0052 15.1216C20.0652 15.0594 20.1231 14.9937 20.1466 14.968ZM21.4167 13.6822C22.0446 13.1822 22.4418 12.5821 22.2139 11.7385C22.0496 11.1306 21.6353 10.7613 21.0274 10.6442C20.2281 10.4906 19.6702 10.8942 19.2194 11.4771L21.4167 13.6822Z"
                fill="white"
              />
              <path
                d="M7.72894 3.77737C9.18331 3.78308 10.2927 4.91243 10.2812 6.37538C10.2698 7.81904 9.1476 8.92553 7.70108 8.91982C6.25457 8.9141 5.13807 7.7826 5.1495 6.32109C5.16093 4.87743 6.28171 3.77165 7.72894 3.77737ZM8.5697 6.35538C8.5697 5.8432 8.23111 5.49461 7.7218 5.49175C7.21248 5.4889 6.8646 5.83106 6.86032 6.3418C6.85603 6.85255 7.19819 7.20257 7.70823 7.20543C8.21826 7.20829 8.56685 6.86469 8.5697 6.35538Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_353_2034">
                <rect
                  width="23.9714"
                  height="24"
                  fill="white"
                  transform="translate(0.0141602 0.347168)"
                />
              </clipPath>
            </defs>
          </svg>
          Replace
        </Flex>
        <Input
          display={params.image ? "none" : "block"}
          id="replace"
          type="file"
          pos="absolute"
          top="20px"
          right="20px"
          opacity="0"
          accept="image/*"
          onChange={(e) => {
            console.log(e.target.files);
            if (e.target.files) {
              const file = Array.from(e.target.files)[0];
              console.log(file);
              const pictureFilesCopy = pictures.files
                ? [...pictures.files]
                : [];
              pictureFilesCopy[activeIndex] = file;
              setPictureFiles(pictureFilesCopy);
            }
          }}
        />
      </Box>
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
