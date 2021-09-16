import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Modal,
  ModalOverlay,
  Text,
  ModalContent,
  Input,
  Box,
  Flex,
  Image,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

import background from "../../../assets/modal.png";

function ForgetPasswordModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recover, setRecover] = React.useState(false);
  const [sendEmail, setSendEmail] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setSendEmail(false);
      setRecover(false);
    };
  }, [isOpen]);

  const [email, setEmail] = React.useState("");
  const handleChange = (e: any) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const RecoverPasswordForm = () => (
    <>
      <Text
        color="#7c4dff"
        fontWeight="bold"
        fontSize="3xl"
        w="60%"
        textAlign="center"
      >
        Por favor ingresa tu correo electrónico
      </Text>
      <Input
        value={email}
        onChange={handleChange}
        w="70%"
        mt={12}
        mb={4}
        errorBorderColor="red.300"
        color="#7c4dff"
        placeholder="Ingresa tu correo"
        size="lg"
      />
      <Button
        disabled={email === ""}
        bg="#7c4dff"
        color="white"
        onClick={() => {
          setSendEmail(true);
          setRecover(false);
        }}
        w="70%"
        borderRadius={20}
      >
        Enviar correo
      </Button>
    </>
  );

  const ConfirmSendEmail = () => (
    <>
      <Text
        color="#7c4dff"
        fontWeight="bold"
        fontSize="3xl"
        w="60%"
        textAlign="center"
      >
        ¡Correo enviado!
      </Text>
      <Text w="50%" color="#848ba3" textAlign="center">
        Hemos enviado un correo, si no lo encuentras en la bandeja de entrada,
        por favor revisa en spam.
      </Text>
      <Button
        bg="#7c4dff"
        color="white"
        onClick={onClose}
        w="70%"
        borderRadius={20}
        mt={4}
      >
        Aceptar
      </Button>
    </>
  );

  return (
    <>
      <Text
        onClick={onOpen}
        my={4}
        color="#7c4dff"
        textAlign="right"
        cursor="pointer"
      >
        ¿Olvidaste tu contraseña?
      </Text>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent borderRadius={15}>
          <ModalCloseButton color="#7c4dff" />
          <Flex>
            <Box>
              <Image src={background} alt="fondo" />
            </Box>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              {!sendEmail && !recover && (
                <>
                  {" "}
                  <Text
                    color="#7c4dff"
                    fontWeight="bold"
                    fontSize="3xl"
                    w="50%"
                    textAlign="center"
                  >
                    ¿Estás seguro que deseas recuperar tu contraseña?
                  </Text>
                  <Button
                    my={2}
                    bg="#7c4dff"
                    color="white"
                    w="70%"
                    borderRadius={20}
                    onClick={() => setRecover(true)}
                  >
                    Recuperar contraseña
                  </Button>
                  <Button
                    bg="gray"
                    onClick={onClose}
                    color="white"
                    w="70%"
                    borderRadius={20}
                  >
                    Cancelar
                  </Button>
                </>
              )}
              {recover && <RecoverPasswordForm />}
              {sendEmail && <ConfirmSendEmail />}
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ForgetPasswordModal;
