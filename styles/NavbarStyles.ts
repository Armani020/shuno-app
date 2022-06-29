import { CSSObject } from "@chakra-ui/react";
import { CSSProperties } from "react";

const navbarContainer: CSSObject = {
  padding: "20px 80px",
  width: "100%",
  alignItems: "flex-end",
  justifyContent: "space-between",

  a: {
    textDecoration: "none",
    // fontSize: "1.5rem",
    // color: "#fcb8d2",
    _hover: {},
    _active: {
      color: "white",
    },
  },
};

const navbarLogo: CSSObject = {
  marginRight: "40px",
  fontSize: 25,
  letterSpacing: "1.5px",
};

export { navbarContainer, navbarLogo };