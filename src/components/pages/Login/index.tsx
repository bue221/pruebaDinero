import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Button,
  Image,
  Box,
  Input,
  Stack,
  Circle,
} from "@chakra-ui/react";
import logo from "../../../assets/logo.svg";
import PasswordInput from "../../ui/atoms/PasswordInput";
import ForgetPasswordModal from "../../ui/molecules/ForgetPassword";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router";
import { Paths } from "../../../routes/routesEnums";
import React from "react";

import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import InputField from "../../ui/atoms/InputField";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const LoginPage = () => {
  const caruselImg: any = {
    1: img1,
    2: img2,
    3: img3,
  };

  const TextSlider: any = {
    1: (
      <Text fontSize="4xl">
        Trabajamos{" "}
        <Text fontWeight="bold" as="span">
          juntos
        </Text>{" "}
        para prestarte un{" "}
        <Text fontWeight="bold" as="span">
          mejor servicio
        </Text>
      </Text>
    ),
    2: (
      <Text fontSize="4xl">
        Las{" "}
        <Text fontWeight="bold" as="span">
          transferencias
        </Text>{" "}
        más{" "}
        <Text fontWeight="bold" as="span">
          rápidas
        </Text>{" "}
        del oeste.
      </Text>
    ),
    3: (
      <Text fontSize="4xl">
        <Text fontWeight="bold" as="span">
          ¡Estamos contigo!
        </Text>{" "}
        Tu dinero en casa en{" "}
        <Text fontWeight="bold" as="span">
          menos de 2 horas.
        </Text>
      </Text>
    ),
  };

  const router = useHistory();

  const [slider, setSlider] = React.useState<any>(1);

  const next = () => {
    if (slider === 3) setSlider(1);
    else {
      setSlider(slider + 1);
    }
  };

  const back = () => {
    if (slider === 1) setSlider(3);
    else {
      setSlider(slider - 1);
    }
  };

  return (
    <Flex
      h="100vh"
      bgImage={caruselImg[slider]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="50%"
        flexDir="column"
        justifyContent="space-between"
        px={14}
        color="white"
        py={20}
      >
        <Text fontSize="2xl" fontWeight="bold">
          ¿consultar giro?
        </Text>
        <Box mb="8rem">
          {TextSlider[slider]}
          <Flex justifyContent="space-between" w="10%" mt={8} ml={3}>
            <Circle
              size="10px"
              bg={slider === 1 ? "#69e1f3" : "white"}
              color="white"
            />
            <Circle
              size="10px"
              bg={slider === 2 ? "#69e1f3" : "white"}
              color="white"
            />
            <Circle
              size="10px"
              bg={slider === 3 ? "#69e1f3" : "white"}
              color="white"
            />
          </Flex>
          <Flex mt={4}>
            <Button
              mr={10}
              borderRadius="50%"
              bg="transparent"
              border="2px"
              borderColor="white"
              color="white"
              onClick={back}
            >
              <ChevronLeftIcon fontSize="2xl" />
            </Button>
            <Button
              borderRadius="50%"
              bg="transparent"
              border="2px"
              borderColor="white"
              color="white"
              onClick={next}
            >
              <ChevronRightIcon fontSize="2xl" />
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex w="50%" flexDir="column">
        <Flex
          bg="white"
          h="100%"
          my={20}
          mx={10}
          borderRadius={12}
          flexDir="column"
          px={10}
        >
          <Box
            my={8}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Image src={logo} alt="logo" />
          </Box>
          <Text color="#7c4dff" fontSize="2xl" fontWeight="bold">
            Iniciar Sesión
          </Text>
          <Text color="#848ba3">
            Ingresa tus credenciales para acceder a la plataforma.
          </Text>
          <Stack mt={9}>
            <InputField isInvalid />
            <PasswordInput isInvalid />
          </Stack>
          <ForgetPasswordModal />
          <Box mb={8}>
            <ReCAPTCHA sitekey={TEST_SITE_KEY} />
          </Box>
          <Button
            bg="#7c4dff"
            color="white"
            onClick={() => router.push(Paths.DASHBOARD)}
          >
            Ingresar ahora
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
