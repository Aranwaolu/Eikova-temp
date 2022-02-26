import { Text, Flex, VStack, Checkbox } from "@chakra-ui/react";
import Input from "../atoms/input";
import Button from "../atoms/button";
import LogoText from "../molecules/LogoText";

const SigninPage: React.FC = () => {
  return (
    <Flex>
      <VStack minW="40%" px="77px" justifyContent="center">
        <form>
          <Text fontWeight="700" lineHeight="46.87px" fontSize="36px" mb="8px">
            Welcome back!
          </Text>
          <Text color="#666666" mb="48px">
            Welcome back to Eikova, please enter your details.
          </Text>
          <Input
            placeholder="Username"
            isRequired
            mb={"24px"}
            _placeholder={{ color: "text.gray100", fontSize: "18px" }}
            fontSize="18px"
          />
          <Input
            isRequired
            placeholder="Password"
            mb={"24px"}
            type="password"
            fontSize="18px"
            _placeholder={{ color: "text.gray100", fontSize: "18px" }}
          />
          <Checkbox
            iconColor="#4F4F4F"
            colorScheme="#EAEAEA"
            borderColor="#BDBDBD"
            color="#575757"
            fontSize="12px"
            mb="48px"
            iconSize="20px"
            _focus={{ outline: "none" }}
            // width="20px"
          >
            Remember for 7 days
          </Checkbox>
          <Button variant="primary" type="submit" fontSize="18px">
            Login
          </Button>
        </form>
      </VStack>

      <VStack
        justifyContent="center"
        minH="100vh"
        w="100%"
        // background="linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/images/signin-bg.png), url(Login-Poster-series.jpg)"
        bgImage="url(/assets/images/signin-bg.png), url(Login-Poster-series.jpg)"
        bgSize="cover"
      >
        <LogoText big />
        <Text
          fontSize="24px"
          lineHeight="28.8px"
          color="white"
          maxW="420px"
          textAlign="center"
          mt="12px"
        >
          Pictures are memories that shoudn’t be lost
        </Text>
      </VStack>
    </Flex>
  );
};

export default SigninPage;
