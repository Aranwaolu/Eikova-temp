import { Box, Button as ChakraButton } from "@chakra-ui/react";

import { useEffect, useState } from "react";

interface IPeopleNavBarProps {
  setRole?: React.Dispatch<React.SetStateAction<string>>;
}
const PeopleNavBar: React.FC<IPeopleNavBarProps> = ({ setRole }) => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    if (setRole) {
      if (activeTab === 0) {
        setRole("");
      } else if (activeTab === 1) {
        setRole("contributor");
      } else if (activeTab === 2) {
        setRole("admin");
      } else if (activeTab === 3) {
        setRole("user");
      }
    }
  }, [setRole, activeTab]);
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
          _hover={{ bgColor: "text.gray100", border: "1px solid text.primary" }}
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
          _hover={{ bgColor: "text.gray100", border: "1px solid text.primary" }}
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
          _hover={{ bgColor: "text.gray100", border: "1px solid text.primary" }}
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
          _hover={{ bgColor: "text.gray100", border: "1px solid text.primary" }}
        >
          Users
        </ChakraButton>
      </Box>
    </>
  );
};

export default PeopleNavBar;
