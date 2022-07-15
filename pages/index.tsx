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
import {
  consumptionTableStyle,
  homeContainerStyle,
  shunoTableStyle,
} from "@styles/HomePageStyles";
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
        <Box key={shuno.id} sx={homeContainerStyle}>
          <TableContainer sx={shunoTableStyle}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Имя ШУНО</Th>
                  <Th>Адрес</Th>
                  <Th>Контроллер</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td alignItems="center">{shuno.name}</Td>
                  <Td>{shuno.address}</Td>
                  <Td>{shuno.controller}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <TableContainer sx={consumptionTableStyle}>
            <Table size="sm">
              <TableCaption>Последние данные о потреблении</TableCaption>
              <Thead>
                <Tr>
                  {shuno.records.map((record) => (
                    <Th key={record.date.toString()}>
                      {record.date.toString()}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {shuno.records.map((record) => (
                    <Td key={record.date.toString()}>{record.consumption}</Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
