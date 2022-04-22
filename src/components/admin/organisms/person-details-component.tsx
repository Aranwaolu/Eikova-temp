import { Checkbox, Flex, Img, Text } from "@chakra-ui/react";
import StatusDropdown from "../molecules/status-dropdown";

interface PersonProps {
  person: Person;
  isChecked?: boolean;
  handleCheckbox: (e?: any, person?: Person) => void;
}

interface Person {
  id: string;
  username: string;
  email: string;
  department: string;
  role: string;
  status: string;
}

const PersonDetailsComponents: React.FC<PersonProps> = ({
  person,
  isChecked,
  handleCheckbox,
}) => {
  // const [checkboxValue, setCheckboxValue] = useState(false)

  const profileIconNames = person.username?.split(" ") || [person.email[0]];

  const profileIconLetters =
    profileIconNames.length > 1
      ? profileIconNames[0][0] + profileIconNames[1][0]
      : profileIconNames[0][0];
  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "#FFCE7C";
      case "superadmin":
        return "#FFCE7C";
      case "contributor":
        return "#FFEED1";
      case "user":
        return "#E3E3E3";
      default:
        return "#E3E3E3";
    }
  };
  return (
    <>
      <Flex
        w="100%"
        margin="0"
        direction="row"
        justify="space-between"
        align="center"
        h="62px"
        color="#A0A0A0"
        p="23px 25px 23px 16px"
      >
        <Flex w="80px" direction="row" justify="space-between" align="center">
          <Checkbox
            isChecked={isChecked}
            onChange={(e) => handleCheckbox(e)}
            _focus={{ outline: "none" }}
          ></Checkbox>
          <span
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: getRoleColor(person.role),
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#AD7F33",
            }}
          >
            {profileIconLetters}
          </span>
        </Flex>
        <Text w="130px" textColor="#545454" fontWeight="700" textAlign="center">
          {person.username ? person.username : "-"}
        </Text>
        <Text w="200px" textColor="#545454">
          {person.email}
        </Text>
        <Text w="140px" textColor="#545454" textAlign="center">
          {person.department ? person.department : "-"}
        </Text>
        <Text w="120px" textColor="#545454" textAlign="center">
          {person.role ? person.role : "-"}
        </Text>

        <StatusDropdown
          status={person.status || "default"}
          handleCustomState={(e) => {
            console.log(e);
            console.log(person.id);
          }}
        />

        <Img
          src="/assets/images/svg_icons/menu_icon.svg"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
    </>
  );
};

export default PersonDetailsComponents;
