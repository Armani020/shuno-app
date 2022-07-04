import { Box } from "@chakra-ui/react";
import NewShunoForm from "@components/NewShunoForm";
import { Shuno } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewShuno: NextPage = () => {
  const addRecordHandler = async (enteredShunoData: Shuno) => {
    const response = await fetch("/api/new-shuno", {
      method: "POST",
      body: JSON.stringify(enteredShunoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <Box sx={mainStyle}>
      <NewShunoForm onAddShuno={addRecordHandler} />
    </Box>
  );
};

export default NewShuno;
