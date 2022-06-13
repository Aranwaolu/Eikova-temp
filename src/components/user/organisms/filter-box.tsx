import { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import FilterItem from "../molecules/filter-item";
import { useHistory, useLocation } from "react-router-dom";

interface IFilterProps {}

const FilterBox: React.FunctionComponent<IFilterProps> = (props) => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const filterData = [
    {
      title: "Meeting",
      options: [
        { value: "school of the spirit", title: "SOS" },
        { value: "writing the vision", title: "WTV" },
        { value: "prayer meeting", title: "PM" },
        { value: "lekki soul center", title: "LSC" },
      ],
    },
    {
      title: "Year",
      options: [
        { value: "2022", title: "2022" },
        { value: "2021", title: "2021" },
        { value: "2020", title: "2020" },
        { value: "2019", title: "2019" },
      ],
    },
    {
      title: "Month",
      options: [
        { value: "january", title: "January" },
        { value: "february", title: "February" },
        { value: "march", title: "March" },
        { value: "april", title: "April" },
        { value: "may", title: "May" },
        { value: "june", title: "June" },
        { value: "july", title: "July" },
        { value: "august", title: "August" },
        { value: "september", title: "September" },
        { value: "october", title: "October" },
        { value: "november", title: "November" },
        { value: "december", title: "December" },
      ],
    },
    {
      title: "Location",
      options: [
        { value: "kosofe", title: "Kosofe" },
        { value: "noic", title: "NOIC" },
        { value: "faith plaza", title: "Faith Plaza" },
        { value: "lekki", title: "Lekki" },
      ],
    },
  ];
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <Box
      minW="235px"
      borderRadius="4px"
      background="linear-gradient(165.9deg, #1C0225 -3.31%, #050F28 50.49%, #081944 90.59%)"
      border="1px solid #FFFFFF"
      p="16px 24px"
      zIndex="99"
      height="fit-content"
    >
      <Flex
        pt="19px"
        pb="16px"
        mb="22px"
        borderBottom="1px solid rgba(255, 255, 255, 0.3)"
        alignContent="center"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="18" height="18" rx="4.90909" fill="#FFEED1" />
          <path
            d="M13.0909 5.64551H4.90909L8.18182 9.51551V12.191L9.81818 13.0091V9.51551L13.0909 5.64551Z"
            stroke="#7B4B36"
            strokeWidth="0.818182"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Text
          color="white"
          mr="22px"
          ml="8px"
          fontSize="14px"
          lineHeight="18px"
          fontWeight="400"
        >
          Filters
        </Text>
      </Flex>
      {filterData.map((filterItem, index) => (
        <FilterItem
          handleRadioChange={(e: string) => {
            const searchQuery = query.get("query") || "";
            const meeting = query.get("meeting") || "";
            const year = query.get("year") || "";
            const month = query.get("month") || "";
            const locationQuery = query.get("location") || "";
            const title = filterItem.title;
            if (title.toLowerCase() === "meeting") {
              history.push(
                `/search?query=${searchQuery}&meeting=${e}${
                  year && `&year=${year}`
                }${month && `&month=${month}`}${
                  locationQuery && `&location=${locationQuery}`
                }`
              );
            } else if (title.toLowerCase() === "year") {
              history.push(
                `/search?query=${searchQuery}${
                  meeting && `&meeting=${meeting}`
                }&year=${e}${month && `&month=${month}`}${
                  locationQuery && `&location=${locationQuery}`
                }`
              );
            } else if (title.toLowerCase() === "month") {
              history.push(
                `/search?query=${searchQuery}${
                  meeting && `&meeting=${meeting}`
                }${year && `&year=${year}`}&month=${e}${
                  locationQuery && `&location=${locationQuery}`
                }`
              );
            } else if (title.toLowerCase() === "location") {
              history.push(
                `/search?query=${searchQuery}${
                  meeting && `&meeting=${meeting}`
                }${year && `&year=${year}`}${
                  month && `&month=${month}`
                }&location=${e}`
              );
            }
          }}
          key={filterItem.title}
          title={filterItem.title}
          options={filterItem.options}
          active={activeFilter === index}
          onClick={() => {
            if (activeFilter === index) {
              setActiveFilter(-1);
            } else {
              setActiveFilter(index);
            }
          }}
        />
      ))}
    </Box>
  );
};

export default FilterBox;
