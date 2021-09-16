import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PasswordInput({ isInvalid, ...props }: { isInvalid?: boolean }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg">
      <Input
        {...props}
        pr="4.5rem"
        type={show ? "text" : "password"}
        color="#7c4dff"
        placeholder="Ingresa tu contraseña"
        isInvalid={isInvalid}
      />
      <InputRightElement w="14rem">
        {isInvalid && <Text color="red">contraseña incorrecta</Text>}
        <Button h="1.75rem" bg="transparent" size="sm" onClick={handleClick}>
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
