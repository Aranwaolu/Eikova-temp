import { useState } from "react";
import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";
import LogoText from "../../user/molecules/LogoText";
import NavSvg from "../atoms/nav-svg";
import UploadIcon from "../atoms/upload-icon";
import { useHistory } from "react-router-dom";

const AdminNav: React.FunctionComponent = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const history = useHistory();
  return (
    <Flex
      flexDir="column"
      as="nav"
      pt="32px"
      px="100px"
      bgColor="#262626"
      overflow="hidden"
      pos="relative"
    >
      <Flex pos="absolute" top="0" right="0">
        <NavSvg mr="70px" mt="-10px" />
        <NavSvg mr="70px" mt="-5px" />
        <NavSvg />
      </Flex>
      <Link href="/">
        <LogoText />
      </Link>
      <Flex alignSelf="flex-end">
        <Flex
          alignItems="center"
          pr="32px"
          mr="32px"
          pos="relative"
          _after={{
            content: "''",
            pos: "absolute",
            h: "28px",
            w: "1px",
            bgColor: "#585757",
            right: "0px",
          }}
        >
          <Img
            w="36px"
            h="36px"
            objectFit="cover"
            mr="9px"
            border="4px solid white"
            borderRadius="50%"
            src="/assets/images/user.png"
          />
          <Box>
            <Text color="white">Tamuno</Text>
            <Text color="#A09D9D">Contributor</Text>
          </Box>
        </Flex>
        <Button
          bgColor="text.secondary"
          h="55px"
          w="219px"
          display="flex"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          __css={{ svg: { mr: "13px" } }}
          zIndex="2"
          onClick={() => {
            history.push("/upload");
          }}
        >
          <UploadIcon />
          Upload Image
        </Button>
      </Flex>
      <Flex>
        <Text
          color="white"
          cursor="pointer"
          borderBottom={activeTab === 0 ? "5px solid" : ""}
          borderColor="text.primary"
          pb="14px"
          mr="35px"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Dashboard
        </Text>
        <Text
          color="white"
          cursor="pointer"
          borderBottom={activeTab === 1 ? "5px solid" : ""}
          borderColor="text.primary"
          pb="14px"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Drafts
        </Text>
      </Flex>
    </Flex>
  );
};

export default AdminNav;
