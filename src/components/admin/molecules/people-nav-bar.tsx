import { Box, Button as ChakraButton } from "@chakra-ui/react";

import { useState } from "react";

const PeopleNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ChakraButton
          mr="32px"
          bgColor={activeTab === 0 ? "text.primary" : ""}
          fontWeight="500"
          fontSize="18px"
          color={activeTab === 0 ? "white" : "#8F8F8F"}
          h="47px"
          border={activeTab === 0 ? "" : "1px solid #8F8F8F"}
          w="101px"
          onClick={() => {
            setActiveTab(0);
          }}
          _focus={{ outline: "none" }}
        >
          All
        </ChakraButton>

        <ChakraButton
          mr="32px"
          color={activeTab === 1 ? "white" : "#8F8F8F"}
          border={activeTab === 1 ? "" : "1px solid #8F8F8F"}
          h="47px"
          w="190px"
          fontWeight="500"
          bgColor={activeTab === 1 ? "text.primary" : ""}
          fontSize="18px"
          onClick={() => {
            setActiveTab(1);
          }}
          _focus={{ outline: "none" }}
        >
          Contributors
        </ChakraButton>

        <ChakraButton
          mr="32px"
          color={activeTab === 2 ? "white" : "#8F8F8F"}
          border={activeTab === 2 ? "" : "1px solid #8F8F8F"}
          h="47px"
          w="145px"
          fontWeight="500"
          bgColor={activeTab === 2 ? "text.primary" : ""}
          fontSize="18px"
          onClick={() => {
            setActiveTab(2);
          }}
          _focus={{ outline: "none" }}
        >
          Admins
        </ChakraButton>

        <ChakraButton
          color={activeTab === 3 ? "white" : "#8F8F8F"}
          border={activeTab === 3 ? "" : "1px solid #8F8F8F"}
          h="47px"
          w="128px"
          fontWeight="500"
          bgColor={activeTab === 3 ? "text.primary" : ""}
          fontSize="18px"
          onClick={() => {
            setActiveTab(3);
          }}
          _focus={{ outline: "none" }}
        >
          Users
        </ChakraButton>
      </Box>
    </>
  );
};

export default PeopleNavBar;
