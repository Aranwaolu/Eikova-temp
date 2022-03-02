import { Box, Flex, Radio, RadioGroup, Stack } from "@chakra-ui/react";

interface IFilterItemProps {
  title: string;
  options: { value: string; title: string }[];
  active: boolean;
  onClick: () => void;
}

const FilterItem: React.FunctionComponent<IFilterItemProps> = ({
  title,
  options,
  active,
  onClick,
}) => {
  return (
    <Box borderBottom="1px solid rgba(255, 255, 255, 0.3)" pb="14px" mb="14px">
      <Flex
        as="button"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        onClick={onClick}
      >
        <Box fontSize="14px" lineHeight="18.6px" color="white">
          {title}
        </Box>
        <Box transform={active ? "rotate(0deg)" : "rotate(180deg)"}>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.25L4.25 0.999999L7.5 4.25"
              stroke="white"
              stroke-width="0.928572"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Flex>
      <Box
        as="form"
        ml="10px"
        h={!active ? "0px" : "auto"}
        overflowY={!active ? "hidden" : "visible"}
        transition=".3s"
      >
        <RadioGroup
          onChange={() => {}}
          defaultValue="1"
          __css={{ label: { color: "white" } }}
        >
          <Stack direction="column" pt="14px">
            {options.map((option) => (
              <Radio
                value={option.value}
                colorScheme="yellow"
                size="sm"
                color="white"
              >
                {option.title}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FilterItem;
