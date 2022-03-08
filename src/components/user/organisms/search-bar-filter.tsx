import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FilterItem from "../molecules/filter-item";

interface IFilterProps {}

const SearchBarFilter: React.FunctionComponent<IFilterProps> = (props) => {
  const filterData = [
    {
      title: "Meeting Search bar",
      options: [
        { value: "sos", title: "SOS" },
        { value: "wtv", title: "WTV" },
        { value: "pm", title: "PM" },
        { value: "lsc", title: "LSC" },
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
        { value: "jan", title: "January" },
        { value: "feb", title: "February" },
        { value: "mar", title: "March" },
        { value: "apr", title: "April" },
      ],
    },
    {
      title: "Location",
      options: [
        { value: "kosofe", title: "Kosofe" },
        { value: "noic", title: "NOIC" },
        { value: "faith-plaza", title: "Faith Plaza" },
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
      {filterData.map((filterItem, index) => (
        <FilterItem
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

export default SearchBarFilter;
