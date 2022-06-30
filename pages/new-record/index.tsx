import { Box } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { NextPage } from "next";

const NewRecord: NextPage = () => {
  return (
    <Box>
      <NewRecordForm />
    </Box>
  );
};

export default NewRecord;
