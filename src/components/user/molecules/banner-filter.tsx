import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IBannerFilterProps {
  getActiveIndex: (index: number) => void;
  setSearchQuery: (searchValue: string) => void;
}

const BannerFilter: React.FunctionComponent<IBannerFilterProps> = ({
  getActiveIndex,
  setSearchQuery,
}) => {
  const [filterValues] = useState([
    "All",
    "Ministers",
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
          key={value}
          color="white"
          borderBottom={index === activeIndex ? "5px solid" : "none"}
          borderColor="text.primary"
          mr="40px"
          opacity={index === activeIndex ? "1" : "0.6"}
          fontWeight={index === activeIndex ? "700" : "400"}
          fontSize="14px"
          pb="14px"
          px="2px"
          lineHeight="18px"
          cursor="pointer"
          onClick={(e) => {
            setActiveIndex(index);
            getActiveIndex(index);
            console.log("value", value);
            if (value === "All") {
              return setSearchQuery("");
            }
            if (value === "Ministers") {
              return setSearchQuery("minister");
            }
            setSearchQuery(value);
          }}
        >
          {value}
        </Text>
      ))}
    </Flex>
  );
};

export default BannerFilter;
