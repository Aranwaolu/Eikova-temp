import { useEffect, useState } from "react";
import {
  Button as ChakraButton,
  Flex,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";

import { createPeople, createMeeting } from "../../../services/category";

interface IAddCategoryInputProps {
  category: string;
}

interface ICategoryInputCopyData {
  category: string;
  position: string;
  inputPlaceholder: string;
  buttonText: string;
}

const addMinisterData = {
  category: "minister",
  position: "204%",
  inputPlaceholder: "Enter minister name e.g Pst. Thompson Ehima",
  buttonText: "Add new minister",
};

const addSongMinisterData = {
  category: "choir",
  position: "204%",
  inputPlaceholder: "Sister Ola.",
  buttonText: "Add new song minister",
};

const addMeetingData = {
  category: "meetings",
  position: "102%",
  inputPlaceholder: "Light Up Australia",
  buttonText: "Add new meeting",
};

const AddCategoryInput: React.FC<IAddCategoryInputProps> = ({ category }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryInputCopyData, setCategoryInputCopyData] =
    useState<ICategoryInputCopyData>(addMinisterData);

  const toast = useToast();

  useEffect(() => {
    switch (category) {
      case "minister":
        setCategoryInputCopyData(addMinisterData);
        break;
      case "song minister":
        setCategoryInputCopyData(addSongMinisterData);
        break;
      case "meetings":
        setCategoryInputCopyData(addMeetingData);
        break;
      default:
        break;
    }
  }, [category]);

  const handleButtonClick = async () => {
    if (inputValue !== "") {
      setLoading(true);
      console.log(inputValue);
      console.log(category);
      if (category === "meetings") {
        await createMeeting(inputValue)
          .then((res) => {
            toast({
              title: `Created new meeting!`,
              status: "success",
              duration: 2000,
              isClosable: false,
            });
            setLoading(false);
          })
          .catch((error) => console.error(error));
      } else {
        await createPeople(inputValue, categoryInputCopyData.category)
          .then((res) => {
            toast({
              title: `Created new person!`,
              status: "success",
              duration: 2000,
              isClosable: false,
            });
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      }
    }
  };

  return (
    <>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        bg="transparent"
        position="absolute"
        width="435px"
        padding="0"
        left={categoryInputCopyData.position}
        top="65px"
        zIndex="101"
        overflow="hidden"
        transition="all 0.1s ease-in"
      >
        <Input
          w="100%"
          placeholder={categoryInputCopyData.inputPlaceholder}
          height="60px"
          backgroundColor="#EAEAEA"
          borderRadius="6px"
          fontSize="18px"
          lineHeight="23px"
          marginBottom="28px"
          value={inputValue}
          _focus={{
            outline: "none",
            boxShadow: "0px 4px 4px rgba(173, 127, 51, 0.1)",
            backgroundColor: "#FFFFFF",
            border: "1px solid #AD7F33",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />

        <ChakraButton
          w="100%"
          display="flex"
          gap="20px"
          justifyContent="center"
          alignItems="center"
          borderRadius="6px"
          bgColor="#AD7F33"
          fontWeight="500"
          fontSize="18px"
          lineHeight="23px"
          color="#FFFFFF"
          h="60px"
          _focus={{ outline: "none" }}
          type="submit"
          _hover={{
            color: "text.primary",
            border: "1px solid #AD7F33",
            bgColor: "white",
          }}
          onClick={handleButtonClick}
        >
          {categoryInputCopyData.buttonText}
          {loading && <Spinner />}
        </ChakraButton>
      </Flex>
    </>
  );
};

export default AddCategoryInput;
