import {  useState } from "react";
import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import LandingFilterNext from "../atoms/landing-filter-arrow";

interface ILandingFilterprops {
  filterValues: { name: string }[];
  loading: boolean;
}

const LandingFilter: React.FunctionComponent<ILandingFilterprops> = ({
  filterValues,
  loading,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  return (
    <Flex
      p="13px 100px 17px"
      borderBottom="1px solid #ECECEC"
      pos="relative"
      overflowX="scroll"
    >
      <Flex
        alignItems="center"
        gap="20px"
        transform={`translateX(-${translate}rem)`}
      >
        {filterValues.map((filter, index) => (
          <Skeleton isLoaded={!loading}>
            <Box
              key={index + filter.name}
              // mr={activeIndex === index ? "23px" : "30px"}
              fontSize="12px"
              fontWeight={activeIndex === index ? "500" : "400"}
              color={activeIndex === index ? "#7B4B36" : "#686868"}
              bgColor={activeIndex === index ? "#FFEED1" : "transparent"}
              p={activeIndex === index && !loading ? "8px 13px" : "0"}
              borderRadius={activeIndex === index ? "8px" : "none"}
              cursor="pointer"
              minW="fit-content"
              onClick={(e) => {
                setActiveIndex(index);
              }}
            >
              {filter.name}
            </Box>
          </Skeleton>
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
