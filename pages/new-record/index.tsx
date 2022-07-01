import { Box } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewRecord: NextPage = () => {
  return (
    <Box sx={mainStyle}>
      <NewRecordForm />
    </Box>
  );
};

export default NewRecord;
