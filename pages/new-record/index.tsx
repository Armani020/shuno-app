import { Box } from "@chakra-ui/react";
import NewRecordForm from "@components/NewRecordForm";
import { Consumption, Shuno } from "@mongo/models/shuno";
import { mainStyle } from "@styles/NewRecordStyles";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";

const NewRecord: NextPage = () => {
  const [loadedShunos, setLoadedShunos] = useState<Shuno[]>([]);

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

    const data = await response.json();
    console.log(data);
  };

  return (
    <Box sx={mainStyle}>
      <NewRecordForm onAddRecord={addRecordHandler} shunos={loadedShunos} />
    </Box>
  );
};

export default NewRecord;
