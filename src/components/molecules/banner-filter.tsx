import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IBannerFilterProps {}

const BannerFilter: React.FunctionComponent<IBannerFilterProps> = (props) => {
  const [filterValues] = useState([
    "Preachers",
    "Ministry",
    "Choir",
    "Audience",
    "Outdoor",
    "Unsplash Plugin",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Flex justifyContent="center">
      {filterValues.map((value, index) => (
        <Text
          color="White"
          borderBottom={index === activeIndex ? "5px solid" : "none"}
          borderColor="text.primary"
          mr="40px"
          opacity={index === activeIndex ? "1" : "0.5"}
          fontWeight={index === activeIndex ? "700" : "400"}
          fontSize="14px"
          pb="14px"
          px="2px"
          lineHeight="18px"
          cursor="pointer"
          onClick={(e) => {
            setActiveIndex(index);
          }}
        >
          {value}
        </Text>
      ))}
    </Flex>
  );
};

export default BannerFilter;
