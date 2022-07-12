import { Box, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { ShunoWithRecords } from "@mongo/models/shuno";
import { containerStyle, mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [loadedShunosWithRecords, setLoadedShunosWithRecord] = useState<ShunoWithRecords[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/home", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let shunos = await response.json();
      setLoadedShunosWithRecord(shunos);
      console.log(shunos);
    };
    getData();
  }, []);
  
  return (
    <Box sx={mainStyle}>
      <TableContainer sx={containerStyle}>
        <Table variant="simple">
          <TableCaption>Таблица ШУНО</TableCaption>
          <Thead>
            <Tr>
              <Th>Имя ШУНО</Th>
              <Th>Адрес</Th>
              <Th>Контроллер</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loadedShunosWithRecords.map((shuno) => (
              <Tr key={shuno.id}>
                <Th>{shuno.name}</Th>
                <Th>{shuno.address}</Th>
                <Th>{shuno.controller}</Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
