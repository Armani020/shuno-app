import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Data, ShunoWithRecords } from "@mongo/models/shuno";
import {
  homeContainerStyle,
  insideTableStyle,
  shunoTableStyle,
} from "@styles/HomePageStyles";
import { mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [loadedShunosWithRecords, setLoadedShunosWithRecord] = useState<
    ShunoWithRecords[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/home", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: Data = await response.json();
      const shunos: ShunoWithRecords[] = data.result;
      setLoadedShunosWithRecord(shunos);
      console.log(shunos);
    };
    getData();
  }, []);

  const openDetailPage = (shunoId: string) => {
    router.push(`/shuno/${shunoId}`);
  };

  return (
    <Box sx={mainStyle}>
      <Box sx={homeContainerStyle}>
        <h1>Таблица ШУНО</h1>
        <Box sx={shunoTableStyle}>
          {loadedShunosWithRecords.map((shuno) => (
            <TableContainer key={shuno.id}>
              <Table
                sx={insideTableStyle}
                onClick={() => openDetailPage(shuno.id?.toString()!)}
              >
                <Thead>
                  <Tr>
                    <Th width={"20%"}>Имя ШУНО</Th>
                    <Th width={"20%"}>Адрес</Th>
                    <Th>Контроллер</Th>
                    {/* {shuno.records.map((record) => (
                      <Th key={record.date.toString()}>
                        {record.date.toString().slice(0, 10)}
                      </Th>
                    ))} */}
                    <Th>{shuno.records[0]?.date.toString().slice(0, 10)}</Th>
                    <Th>{shuno.records[1]?.date.toString().slice(0, 10)}</Th>
                    <Th>{shuno.records[2]?.date.toString().slice(0, 10)}</Th>
                    <Th>{shuno.records[3]?.date.toString().slice(0, 10)}</Th>
                    <Th>{shuno.records[4]?.date.toString().slice(0, 10)}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{shuno.name}</Td>
                    <Td>{shuno.address}</Td>
                    <Td>{shuno.controller}</Td>
                    {/* {shuno.records.map((record) => (
                      <Td key={record.date.toString()}>{record.consumption}</Td>
                    ))} */}
                    <Td>{shuno.records[0]?.consumption}</Td>
                    <Td>{shuno.records[1]?.consumption}</Td>
                    <Td>{shuno.records[2]?.consumption}</Td>
                    <Td>{shuno.records[3]?.consumption}</Td>
                    <Td>{shuno.records[4]?.consumption}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
