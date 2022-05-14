<<<<<<< HEAD
import {
  Box,
  Flex,
  Text,
  Spinner,
  Checkbox,
  Img,
  Skeleton,
} from "@chakra-ui/react";
import PersonDetailsComponents from "./person-details-component";
=======
import { Box, Flex, Text, Checkbox, Img, Skeleton } from '@chakra-ui/react'
import PersonDetailsComponents from './person-details-component'
>>>>>>> 30ee8a3ee8383ebab42176ce811052bfc3db15fd

interface Person {
  id: string;
  username: string;
  email: string;
  department: string;
  role: string;
  status: string;
}

interface IDashboardTableProps {
  allChecked: boolean;
  isIndeterminate: boolean;
  setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>;
  checkedItems: boolean[];
  people: Person[];
  loading: boolean;
  error: string;
  refetch: () => void;
}
const DashboardTable: React.FC<IDashboardTableProps> = ({
  allChecked,
  isIndeterminate,
  setCheckedItems,
  checkedItems,
  people,
  loading,
  error,
  refetch,
}) => {
  return (
    <Flex
      w="100%"
      direction="column"
      justify="space-between"
      align="center"
      mt="31px"
    >
      {error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <Flex
            w="100%"
            direction="row"
            justify="space-between"
            align="center"
            h="62px"
            bg="#E1E1E1"
            borderRadius="5px 5px 0 0"
            color="#A0A0A0"
            p="23px 40px 23px 30px"
            mb="8px"
          >
            <Checkbox
              w="80px"
              _focus={{ outline: "none" }}
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems(checkedItems.map(() => e.target.checked))
              }
            ></Checkbox>
            <Text textAlign="center" w="130px" fontWeight="700">
              Username
            </Text>
            <Text w="200px" fontWeight="700">
              Email Address
            </Text>
            <Text textAlign="center" w="140px" fontWeight="700">
              Department
            </Text>
            <Text textAlign="center" w="120px" fontWeight="700">
              Role
            </Text>
            <Text textAlign="center" w="140px" fontWeight="700">
              Status
            </Text>
            <Img
              src="/assets/images/svg_icons/menu_icon.svg"
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
          <Flex
            w="100%"
            direction="column"
            justify="space-between"
            align="center"
            borderWidth="1px"
            borderColor="#E8E8E8"
            padding="0 15px"
          >
            {loading && (
              <Box
                w="100%"
                margin="0"
                borderBottom="1px solid #E8E8E8"
                _last={{ borderBottom: "none" }}
              >
                <Skeleton height="40px" margin="11px 0" />
                <Skeleton height="40px" margin="11px 0" />
                <Skeleton height="40px" margin="11px 0" />
                <Skeleton height="40px" margin="11px 0" />
                <Skeleton height="40px" margin="11px 0" />
              </Box>
            )}

            {people &&
              loading === false &&
              people.length > 0 &&
              people.map((person, index) => (
                <Box
                  w="100%"
                  margin="0"
                  borderBottom="1px solid #E8E8E8"
                  _last={{ borderBottom: "none" }}
                  key={person.id}
                >
                  {/* <Skeleton isLoaded={!loading}> */}
                  <PersonDetailsComponents
                    isChecked={checkedItems[index]}
                    handleCheckbox={(e) => {
                      setCheckedItems(
                        checkedItems.map((item, idx) =>
                          index === idx ? e.target.checked : item
                        )
                      );
                    }}
                    key={person.id}
                    person={person}
                    handleChange={() => refetch()}
                  />
                  {/* </Skeleton> */}
                </Box>
              ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default DashboardTable;
