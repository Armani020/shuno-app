import { Box } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewRecord: NextPage = () => {
  const addRecordHandler = async (enteredRecordData: any) => {
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
