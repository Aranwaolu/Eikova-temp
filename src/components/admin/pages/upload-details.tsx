import { useContext, useEffect } from "react";
import AdminNav from "../organisms/admin-nav";
import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import Button from "../../user/atoms/button";
import { PictureFilesContext } from "../../../contexts/pictures-files-context";
import ImageDetailInput from "../molecules/image-detail-input";

const UploadDetails: React.FC = () => {
  const { pictures } = useContext(PictureFilesContext);

  useEffect(() => {
    document.title = "Upload pictures - Eikova";
  }, []);
  return (
    <>
      <AdminNav />
      <Box px="100px" pt="80px" pb="150px">
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
            <Button
              variant="primary"
              minW="162px"
              h="53px"
              fontSize="18px"
              fontWeight="500"
              opacity="0.5"
            >
              Publish now
            </Button>
          </Flex>
        </Flex>
        <Box maxW="850px" mx="auto" mt="50px">
          <Input
            placeholder="Input the image title"
            px="30px"
            fontSize="36px"
            fontWeight="700"
            border="none"
            // color="text.gray200"
            _placeholder={{ color: "text.gray200" }}
            _focus={{ outline: "none" }}
          />
          <Img w="100%" mt="48px" src={pictures.links ? pictures.links[0] : ""} />
          <Text
            fontSize="24px"
            fontWeight="500"
            px="30px"
            color="text.gray200"
            mt="48px"
          >
            Input the image description here
          </Text>
          <ImageDetailInput
            title="Tags"
            sideNote="(Minimum 10)"
            suggestions={[
              "Bible",
              "Rev",
              "Kayode",
              "Sitting",
              "Praying",
              "Stood",
            ]}
          />
          <ImageDetailInput
            title="Meeting"
            placeholder="Add meeting..."
            sideNote="(Minimum 1)"
            suggestions={["SOS", "PM", "LSC", "BECON", "WTV", "ANAMNESIS"]}
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
          />
          <Button variant="primary" mt="95px" fontSize="18px" fontWeight="500">
            Publish now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UploadDetails;
