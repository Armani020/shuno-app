import { Box } from "@chakra-ui/react";
import { bodyStyle } from "@styles/HomePageStyles";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Box sx={bodyStyle}>
      <Navbar />
      <main>{props.children}</main>
    </Box>
  );
};

export default Layout;
