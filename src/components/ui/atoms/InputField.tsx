import { InputGroup, Input, InputRightElement, Text } from "@chakra-ui/react";

function InputField({ isInvalid, ...props }: { isInvalid?: boolean }) {
  return (
    <InputGroup size="lg">
      <Input
        {...props}
        pr="4.5rem"
        type="text"
        color="#7c4dff"
        placeholder="Ingresa tu usuario"
        isInvalid={isInvalid}
      />
      <InputRightElement w="14rem">
        {isInvalid && <Text color="red">Usuario incorrecto</Text>}
      </InputRightElement>
    </InputGroup>
  );
}

export default InputField;
