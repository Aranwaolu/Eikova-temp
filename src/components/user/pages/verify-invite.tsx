import { Text, Flex, VStack, Spinner, Box, Select } from "@chakra-ui/react";
import Input from "../atoms/input";
import Button from "../atoms/button";
import LogoText from "../molecules/LogoText";
import { useEffect, useState } from "react";
import { completeResgistration, verifyInvite } from "../../../services/auth";
import { useLocation } from "react-router-dom";
import { useVerifyInvite } from "../../../hooks";

const VerifyInvitePage: React.FC = () => {
  const {
    user,
    userInput,
    setUserInput,
    loading,
    error,
    signUpLoading,
    handleVerifyInvite,
    loadingError,
  } = useVerifyInvite();
  return (
    <Flex>
      <VStack minW="40%" px="77px" justifyContent="center">
        {loading ? (
          <Box>
            <Spinner />
          </Box>
        ) : loadingError ? (
          <Text color="red" textAlign="center" fontSize="20px">
            {loadingError}
          </Text>
        ) : (
          <form>
            <Text
              fontWeight="700"
              lineHeight="46.87px"
              fontSize="36px"
              mb="8px"
            >
              Welcome {user.username}
            </Text>
            <Text color="#666666" mb="48px">
              Fill the details to complete your registration
            </Text>
            <Input
              type="text"
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
              value={user.username}
              isReadOnly
            />
            <Input
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
              value={user.email}
              isReadOnly
            />
            <Box mb="24px">
              <Select
                h="62px"
                bg="text.gray150"
                borderRadius="6px"
                fontSize="18px"
                _focus={{
                  outline: "none",
                  boxShadow: "0px 4px 4px rgba(173, 127, 51, 0.1)",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #AD7F33",
                }}
                defaultValue=""
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserInput({ ...userInput, department: e.target.value });
                }}
              >
                <option value="" disabled>
                  Select department
                </option>
                <option value="egfm comms">EGFM Communications</option>
                <option value="video">Video Unit</option>
                <option value="e-church">Online Church</option>
              </Select>
            </Box>
            <Input
              placeholder="Role e.g. HOD."
              type="text"
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
                setUserInput({ ...userInput, position: e.target.value });
              }}
            />
            <Input
              isRequired
              placeholder="Create a Password"
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
                setUserInput({ ...userInput, password: e.target.value });
              }}
            />
            <Button
              display="flex"
              gap="20px"
              variant="primary"
              type="submit"
              fontSize="18px"
              onClick={(e) => {
                e.preventDefault();
                handleVerifyInvite();
              }}
            >
              {signUpLoading ? "Please wait" : "Complete Registration"}
              {signUpLoading && <Spinner />}
            </Button>
            {<Text color="red">{error}</Text>}
          </form>
        )}
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

export default VerifyInvitePage;
