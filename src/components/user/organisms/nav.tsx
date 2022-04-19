import { useContext } from "react";
import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";
import LogoText from "../molecules/LogoText";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/user-context";

interface INavigationBarProps {}

const NavigationBar: React.FunctionComponent<INavigationBarProps> = (props) => {
  const { user } = useContext(UserContext);  
  return (
    <Flex as="nav" justifyContent="space-between" pt="16px" px="27px">
      <Link to="/">
        <LogoText />
      </Link>
      <HStack>
        <Img
          border="3px solid white"
          borderRadius="50%"
          src="/assets/images/user.png"
          h="34px"
          w="34px"
          objectFit="cover"
        />
        <Box>
          <Text fontSize="14px" color="white">
            {user.details.name}
          </Text>
          <Text fontSize="12px" color="white">
            {user.details.role}
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default NavigationBar;
