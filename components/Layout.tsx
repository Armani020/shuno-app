import { Box } from "@chakra-ui/react";
import { bodyStyle } from "@styles/HomePageStyles";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Box sx={bodyStyle}>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
