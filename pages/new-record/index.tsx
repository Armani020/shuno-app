import { Box, useToast } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { useUtils } from "@hooks/utils";
import { ApiResponse, Consumption, Shuno } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const NewRecord: NextPage = () => {
  const [loadedShunos, setLoadedShunos] = useState<Shuno[]>([]);
  const toast = useToast();
  const { toaster } = useUtils();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/shuno", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let shunos = await response.json();
      setLoadedShunos(shunos);
      console.log(shunos);
    };
    getData();
  }, []);

  const addRecordHandler = async (enteredRecordData: Consumption) => {
    const response = await fetch("/api/record", {
      method: "POST",
      body: JSON.stringify(enteredRecordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      const message: ApiResponse = await response.json();
      toaster(toast, message.message, "success");
      return;
    }

    const message: ApiResponse = await response.json();
    toaster(toast, message.message, "error");
  };

  return (
    <Box sx={mainStyle}>
      <NewRecordForm onAddRecord={addRecordHandler} shunos={loadedShunos} />
    </Box>
  );
};

export default NewRecord;
