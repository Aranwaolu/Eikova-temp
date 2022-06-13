import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FilterItem from "../molecules/filter-item";

interface IFilterProps {
  filterQueries: {
    meeting: string;
    year: string;
    month: string;
    location: string;
  };
  setFilterQueries: React.Dispatch<
    React.SetStateAction<{
      meeting: string;
      year: string;
      month: string;
      location: string;
    }>
  >;
}

const SearchBarFilter: React.FunctionComponent<IFilterProps> = ({
  setFilterQueries,
  filterQueries,
}) => {
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
          handleRadioChange={(e) => {
            if (filterItem.title === "Meeting") {
              setFilterQueries({ ...filterQueries, meeting: e });
            } else if (filterItem.title === "Year") {
              setFilterQueries({ ...filterQueries, year: e });
            } else if (filterItem.title === "Month") {
              setFilterQueries({ ...filterQueries, month: e });
            } else if (filterItem.title === "Location") {
              setFilterQueries({ ...filterQueries, location: e });
            }
          }}
        />
      ))}
    </Box>
  );
};

export default SearchBarFilter;
