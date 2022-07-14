import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ShunoWithRecords } from "@mongo/models/shuno";
import { containerStyle, mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [loadedShunosWithRecords, setLoadedShunosWithRecord] = useState<
    ShunoWithRecords[]
  >([]);

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
      {loadedShunosWithRecords.map((shuno) => (
        <TableContainer key={shuno.id} sx={containerStyle}>
          <Table>
            <Thead>
              <Tr>
                <Th>Имя ШУНО</Th>
                <Th>Адрес</Th>
                <Th>Контроллер</Th>
                {/* {shuno.records.map((record) => (
                  <Th>{record.date.toString()}</Th>
                ))} */}
              </Tr>
            </Thead>
            <Tbody>
              <Tr key={shuno.id}>
                <Td>{shuno.name}</Td>
                <Td>{shuno.address}</Td>
                <Td>{shuno.controller}</Td>
                {/* {shuno.records.map((record) => (
                  <Td>{record.consumption}</Td>
                ))} */}
              </Tr>
            </Tbody>
          </Table>

          <Table size="sm">
            <Thead>
              <Tr>
                {shuno.records.map((record) => (
                  <Th key={shuno.name}>{record.date.toString()}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {shuno.records.map((record) => (
                  <Td key={shuno.address}>{record.consumption}</Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
};

export default Home;
