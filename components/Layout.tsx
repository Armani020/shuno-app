import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Box>
      <Navbar/>
      <main>{props.children}</main>
    </Box>
  );
};

export default Layout;
