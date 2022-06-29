import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <h2>Logo</h2>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button>Главная</Button>
                  {/* <Button>Добавить запись</Button> */}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Добавить запись</Button>
                </HStack>
              </Flex>
            ) : (
              <></>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
