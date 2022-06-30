import { CSSObject } from "@chakra-ui/react";

const containerStyle: CSSObject = {
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

const formControlStyles: CSSObject = {
  padding: "1rem",
};

const inputStyle: CSSObject = {
  marginBottom: "0.5rem",
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  textArea: {
    display: "block",
    font: "inherit",
    borderRadius: "40px",
    border: "1px solid #ccc",
    padding: "0.25rem",
    width: "100%",
  },
};

export { containerStyle, formControlStyles, inputStyle };