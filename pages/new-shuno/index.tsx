import { Box, useToast } from "@chakra-ui/react";
import NewShunoForm from "@components/NewShunoForm";
import { useHttp } from "@hooks/useHttp";
import { useUtils } from "@hooks/utils";
import { Data, Shuno } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewShuno: NextPage = () => {
  const toast = useToast();
  const { toaster } = useUtils();
  const { request, data, loading, error } = useHttp();

  const addRecordHandler = async (enteredShunoData: Shuno) => {
    const response = await fetch("/api/shuno", {
      method: "POST",
      body: JSON.stringify(enteredShunoData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Data = await response.json();

    if (data.error) {
      toaster(toast, data.error, "error");
      return;
    }

    if (data.message) {
      toaster(toast, data.message, "success");
    }

    console.log(data);
  };

  return (
    <Box sx={mainStyle}>
      <NewShunoForm onAddShuno={addRecordHandler} />
    </Box>
  );
};

export default NewShuno;
