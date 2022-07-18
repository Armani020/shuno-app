import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { footerStyles } from "@styles/FooterStyles";

const Footer = () => {
  return (
    <Box bg="gray.700" color="gray.100" sx={footerStyles}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 АО "ГОРСВЕТ LTD"</Text>
      </Container>
    </Box>
  );
};

export default Footer;
