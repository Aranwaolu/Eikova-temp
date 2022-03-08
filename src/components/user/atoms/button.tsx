import * as React from "react";
import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

interface IButtonProps extends ButtonProps {
  variant: "primary" | "secondary";
}
const Button: React.FC<IButtonProps> = ({ variant, children, ...props }) => {
  return (
    <ChakraButton
      h="62px"
      _focus={{ outline: "none" }}
      bg={variant === "primary" ? "text.primary" : "transparent"}
      borderRadius="6px"
      w="100%"
      color={variant === "primary" ? "white" : "text.primary"}
      borderColor="text.primary"
      _hover={{
        backgroundColor: "texy.primary",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
