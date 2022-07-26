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
    fontSize: "24",
  },
};

const shunoTableContainerStyle: CSSObject = {
  borderTop: "1px solid",
  borderRight: "1px solid",
  borderLeft: "1px solid",
};

const shunoTableStyle: CSSObject = {
  tableLayout: "auto",
  // width: "100%",
  th: {
    textAlign: "center",
    backgroundColor: "lightgray",
    borderRight: "1px",
  },
  td: {
    textAlign: "center",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRight: "1px",
    borderBottom: "1px",
  },
};

const consumptionTableStyle: CSSObject = {
  width: "10%",
};

export {
  homeContainerStyle,
  shunoTableContainerStyle,
  consumptionTableStyle,
  shunoTableStyle,
  bodyStyle,
};
