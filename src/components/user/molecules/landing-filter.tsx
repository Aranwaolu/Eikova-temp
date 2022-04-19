import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import LandingFilterNext from "../atoms/landing-filter-arrow";

interface ILandingFilterprops {}

const LandingFilter: React.FunctionComponent<ILandingFilterprops> = (props) => {
  const [filterValues] = useState([
    "All Preachers",
    "Rev. Kayode Oyegoke",
    "Rev. Helen Oyegoke",
    "Rev. Busuyi Olabode",
    "Rev. Ken Igbinedion",
    "Pst. Emeka Egwuchukwu",
    "Pst. Tosin Gabriel",
    "Pst. Tayo Ladejo",
    "Pst. Dimeji Elugbade",

    "Pst. Tope Falaye",
    "Rev. Mike Ogunoye",
    "Rev. Mike Ogunoye",
    "Rev. Mike Ogunoye",
    "Rev. Mike Ogunoye",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  return (
    <Flex
      p="13px 100px 17px"
      borderBottom="1px solid #ECECEC"
      pos="relative"
      overflowX="scroll"
    >
      <Flex alignItems="center" transform={`translateX(-${translate}rem)`}>
        {filterValues.map((value, index) => (
          <Box
            key={index + value}
            mr={activeIndex === index ? "23px" : "30px"}
            fontSize="12px"
            fontWeight={activeIndex === index ? "500" : "400"}
            color={activeIndex === index ? "#7B4B36" : "#686868"}
            bgColor={activeIndex === index ? "#FFEED1" : "transparent"}
            p={activeIndex === index ? "8px 13px" : "0"}
            borderRadius={activeIndex === index ? "8px" : "none"}
            cursor="pointer"
            minW="fit-content"
            onClick={(e) => {
              setActiveIndex(index);
            }}
          >
            {value}
          </Box>
        ))}
      </Flex>
      <Button
        pos="absolute"
        right="100px"
        top="50%"
        transform="translateY(-50%)"
        _focus={{ border: "none", background: "none" }}
        _hover={{ background: "none" }}
        background="none"
        p="0"
        onClick={() => {
          setTranslate(translate + 3);
        }}
        display="none"
      >
        <LandingFilterNext />
      </Button>
    </Flex>
  );
};

export default LandingFilter;
