import { Box, useToast } from "@chakra-ui/react";
import NewShunoForm from "@components/NewShunoForm";
import { useHttp } from "@hooks/useHttp";
import { useUtils } from "@hooks/utils";
import { ApiResponse, Shuno } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";

const NewShuno: NextPage = () => {
  const toast = useToast();
  const { toaster } = useUtils();
  const { request, data, loading, error } = useHttp();

  const addRecordHandler = async (enteredShunoData: Shuno) => {
    // const response = await fetch("/api/shuno", {
    //   method: "POST",
    //   body: JSON.stringify(enteredShunoData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (response.status == 201) {
    //   const message: ApiResponse = await response.json();
    //   toaster(toast, message.message, "success");
    //   return;
    // }

    // const message: ApiResponse = await response.json();
    // toaster(toast, message.message, "error");

    request("/api/shuno", "POST", enteredShunoData);

    if (data) {
      console.log(error);
    }

    // console.log(data);
  };

  return (
    <Box sx={mainStyle}>
      <NewShunoForm onAddShuno={addRecordHandler} />
    </Box>
  );
};

export default NewShuno;
