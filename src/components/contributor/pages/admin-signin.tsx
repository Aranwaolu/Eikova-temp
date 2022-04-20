import { Text, Flex, VStack, Checkbox, Spinner } from "@chakra-ui/react";
import Input from "../../user/atoms/input";
import Button from "../../user/atoms/button";
import LogoText from "../../user/molecules/LogoText";
import { useAdminSignIn } from "../../../hooks";

const AdminSigninPage: React.FC = () => {
  const { setEmail, setPassword, handleSignIn, error, isSigningIn } =
    useAdminSignIn();
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
            placeholder="Email"
            type="email"
            name="email"
            isRequired
            mb={"24px"}
            _placeholder={{ color: "text.gray100", fontSize: "18px" }}
            fontSize="18px"
            _focus={{
              outline: "none",
              boxShadow: "0px 4px 4px rgba(173, 127, 51, 0.1)",
              backgroundColor: "#FFFFFF",
              border: "1px solid #AD7F33",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            isRequired
            placeholder="Password"
            mb={"24px"}
            type="password"
            fontSize="18px"
            _placeholder={{ color: "text.gray100", fontSize: "18px" }}
            _focus={{
              outline: "none",
              boxShadow: "0px 4px 4px rgba(173, 127, 51, 0.1)",
              backgroundColor: "#FFFFFF",
              border: "1px solid #AD7F33",
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
          >
            Remember for 7 days
          </Checkbox>
          {error && (
            <Text mb="16px" color="red">
              {error}
            </Text>
          )}
          <Button
            display="flex"
            gap="20px"
            variant="primary"
            type="submit"
            fontSize="18px"
            onClick={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            {isSigningIn ? "Please wait" : "Login"}
            {isSigningIn && <Spinner />}
          </Button>
        </form>
      </VStack>

      <VStack
        justifyContent="center"
        minH="100vh"
        w="100%"
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
          Pictures are memories that shoudn’t be lost.
        </Text>
      </VStack>
    </Flex>
  );
};

export default AdminSigninPage;
