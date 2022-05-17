import { useState } from "react";

import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";

import { useDetectClickOutside } from "react-detect-click-outside";
import AddCategoryInputModal from "../modals/add-category-modal";

const mainDropdownMenu = ["people", "meetings"];
const peopleDropdownMenu = ["minister", "song minister"];

const AddCategoryDropdown: React.FC = () => {
  // check how this useState calls affects the rendering
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const [categoryInputType, setCategoryInputType] = useState("");

  const [hovered, setHovered] = useState(false);
  const [mainClicked, setMainClicked] = useState(false);
  const [mainMenuClickedItem, setMainMenuClickedItem] = useState("");

  const {
    isOpen: isCategoryInputModalOpen,
    onOpen: onCategoryInputModalOpen,
    onClose: onCategoryInputModalClose,
  } = useDisclosure();

  const mainRef = useDetectClickOutside({
    onTriggered: () => {
      setIsMainDropdownOpen(false);
      setIsPeopleDropdownOpen(false);
      setMainClicked(false);
    },
  });

  const handlePeopleMenuOptionClick = (e: string) => {
    setCategoryInputType(e);
    setIsMainDropdownOpen(false);
    onCategoryInputModalOpen();
  };

  const handleMainMenuOptionsClick = (e: string) => {
    if (e === "people") {
      setMainMenuClickedItem(e);
      setMainClicked(true);
      setIsPeopleDropdownOpen(!isPeopleDropdownOpen);
    } else {
      handlePeopleMenuOptionClick(e);
    }
  };

  return (
    <>
      <Flex
        direction="column"
        justify="flex-start"
        align="center"
        position="relative"
        cursor="pointer"
        ref={mainRef}
      >
        <Flex
          direction="row"
          justify="center"
          align="center"
          p="15px 30px"
          borderRadius="5px"
          bgColor={hovered ? "#E2E8F0" : "#EAEAEA"}
          fontWeight="500"
          fontSize="18px"
          lineHeight="23px"
          color="#262626"
          h="60px"
          onClick={() => {
            setIsMainDropdownOpen(!isMainDropdownOpen);
            setIsPeopleDropdownOpen(false);
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          _focus={{ outline: "none" }}
        >
          <Image
            src="/assets/images/svg_icons/add_category_icon.svg"
            style={{ marginRight: "15px" }}
          />
          Add Category
        </Flex>

        {isMainDropdownOpen && (
          <Box
            position="absolute"
            width="100%"
            padding="0 0"
            left="0"
            background="#FFFFFF"
            boxShadow="2px 4px 20px rgba(0, 0, 0, 0.15)"
            borderRadius="0px 0px 6px 6px"
            marginTop="65px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            zIndex="99"
            overflow="hidden"
          >
            {mainDropdownMenu.map((item, index) => {
              return (
                <Box
                  width="100%"
                  cursor="pointer"
                  padding="8px 30px"
                  textTransform="capitalize"
                  position="relative"
                  backgroundColor={
                    mainClicked && mainMenuClickedItem === item
                      ? "#FFEED1"
                      : "transparent"
                  }
                  _hover={{ background: "#FFEED1" }}
                  _after={{
                    content: `''`,
                    background: "#E8E8E8",
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    height: "1px",
                    width: "85%",
                    marginLeft: "calc(-85% /2)",
                  }}
                  key={index}
                  onClick={() => handleMainMenuOptionsClick(item)}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        )}

        {isMainDropdownOpen && isPeopleDropdownOpen && (
          <Box
            position="absolute"
            width="100%"
            padding="0"
            left="102%"
            background="#FFFFFF"
            boxShadow="2px 4px 20px rgba(0, 0, 0, 0.15)"
            borderRadius="0px 0px 6px 6px"
            marginTop="65px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            zIndex="99"
            overflow="hidden"
          >
            {peopleDropdownMenu.map((item, index) => {
              return (
                <Box
                  width="100%"
                  cursor="pointer"
                  padding="8px 30px"
                  textTransform="capitalize"
                  position="relative"
                  _hover={{ background: "#FFEED1" }}
                  _after={{
                    content: `''`,
                    background: "#E8E8E8",
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    height: "1px",
                    width: "85%",
                    marginLeft: "calc(-85% /2)",
                  }}
                  key={index}
                  onClick={() => {
                    handlePeopleMenuOptionClick(item);
                  }}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        )}

        <AddCategoryInputModal
          category={categoryInputType}
          isOpen={isCategoryInputModalOpen}
          onClose={onCategoryInputModalClose}
        />
      </Flex>
    </>
  );
};

export default AddCategoryDropdown;
