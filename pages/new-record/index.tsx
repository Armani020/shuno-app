import { Box } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { Consumption } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewRecord: NextPage = () => {
  const addRecordHandler = async (enteredRecordData: Consumption) => {
    const response = await fetch("/api/new-record", {
      method: "POST",
      body: JSON.stringify(enteredRecordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };
  
  return (
    <Box sx={mainStyle}>
      <NewRecordForm onAddRecord={addRecordHandler} />
    </Box>
  );
};

export default NewRecord;
