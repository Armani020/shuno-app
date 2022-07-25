import { CSSObject } from "@emotion/react";

const bodyStyle: CSSObject = {
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  backgroundImage: "bg.jpg",
  minHeight: "100vh",
  paddingTop: "5rem",
};

const homeContainerStyle: CSSObject = {
  marginTop: "20px",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  padding: "30px",
  background: "#FFF",
  h1: {
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "15px",
    fontSize: "24"
  },
};

const shunoTableStyle: CSSObject = {
  borderTop: "1px solid",
  borderRight: "1px solid",
  borderLeft: "1px solid",
  // borderBottom: "1px solid",
  // borderRadius: "6px 6px 0 0",
};

const insideTableStyle: CSSObject = {
  th: {
    textAlign: "center",
    maxWidth: "30px",
    backgroundColor: "lightgray",
    borderRight: "1px",
  },
  td: {
    textAlign: "center",
    maxWidth: "30px",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRight: "1px",
    borderBottom: "1px",
  },
};

const consumptionTableStyle: CSSObject = {
  //   marginTop: "20px",
  border: "1px solid",
  borderRadius: "0 0 6px 6px",
  padding: "5px",
};

export {
  homeContainerStyle,
  shunoTableStyle,
  consumptionTableStyle,
  insideTableStyle,
  bodyStyle,
};
