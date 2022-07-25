import { CSSObject } from "@chakra-ui/react";
import { CSSProperties } from "react";

const mainStyle: CSSProperties = {
  margin: "3rem auto",
  width: "90%",
  maxWidth: "100rem",
  paddingBottom: "3rem",
};

const datePickerInputStyle: CSSProperties = {
  width: "100%",
  padding: "5px 15px",
  border: "1px solid",
  borderRadius: "6px",
  borderColor: "RGBA(0, 0, 0, 0.08)",
};

const containerStyle: CSSObject = {
  marginTop: "20px",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  background: "#FFF",
};

const formControlStyle: CSSObject = {
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

const actionStyle: CSSObject = {
  marginTop: "1rem",
  textAlign: "right",
  button: {
    font: "inherit",
    cursor: "pointer",
    color: "white",
    padding: "0.5rem 1.5rem",
    border: "1px solid #77002e",
    borderRadius: "4px",
    fontWeight: "bold",
    _hover: {},
    _active: {
      backgroundColor: "#a50e48",
      borderColor: "#a50e48",
    },
  },
};

export {
  containerStyle,
  formControlStyle,
  inputStyle,
  actionStyle,
  mainStyle,
  datePickerInputStyle,
};
