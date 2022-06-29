import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { navbarContainer, navbarLogo } from "@styles/NavbarStyles";
import Link from "next/link";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex bg="blue.200" sx={navbarContainer}>
      <Flex alignItems="flex-end">
        <Heading sx={navbarLogo}>Logo</Heading>
        <HStack spacing="40px" letterSpacing="1px">
          <Link href={""}>Главная</Link>
          <Link href={""}>Добавить запись</Link>
        </HStack>
      </Flex>
      <Link href={""}>О нас</Link>
    </Flex>
  );
};

export default Navbar;
