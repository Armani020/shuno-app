import { mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Data, ShunoWithRecords } from "@mongo/models/shuno";
import {
  consumptionTableStyle,
  homeContainerStyle,
  shunoTableContainerStyle,
  shunoTableStyle,
} from "@styles/HomePageStyles";
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
        <Box sx={shunoTableContainerStyle}>
          {loadedShunosWithRecords.map((shuno) => (
            <TableContainer key={shuno.id}>
              <Table sx={shunoTableStyle}>
                <Thead>
                  <Tr>
                    <Th rowSpan={2} width={"1%"}>
                      №
                    </Th>
                    <Th rowSpan={2} width={"5%"}>
                      Номер ШУНО
                    </Th>
                    <Th rowSpan={2} width={"5%"}>
                      Общая <br /> нагрузка <br /> Вт
                    </Th>
                    <Th width={"5%"} rowSpan={2} sx={consumptionTableStyle}>
                      Плановое <br /> количество <br /> светильников
                    </Th>
                    <Th colSpan={3} textAlign="center">
                      {shuno.records[0]?.date.toString().slice(0, 10)}
                    </Th>
                    <Th colSpan={3} textAlign="center">
                      {shuno.records[1]?.date.toString().slice(0, 10)}
                    </Th>
                    <Th colSpan={3} textAlign="center">
                      {shuno.records[2]?.date.toString().slice(0, 10)}
                    </Th>
                  </Tr>
                  <Tr>
                    <Th width={"5%"}>
                      Текущая <br /> нагрузка
                    </Th>
                    <Th width={"5%"}>
                      Отклонение <br /> от плановой <br /> нагрузки
                    </Th>
                    <Th width={"5%"}>
                      Количество <br /> неисправных <br /> светильников
                    </Th>
                    <Th width={"5%"}>
                      Текущая <br /> нагрузка
                    </Th>
                    <Th width={"5%"}>
                      Отклонение <br /> от плановой <br /> нагрузки
                    </Th>
                    <Th width={"5%"}>
                      Количество <br /> неисправных <br /> светильников
                    </Th>
                    <Th width={"5%"}>
                      Текущая <br /> нагрузка
                    </Th>
                    <Th width={"5%"}>
                      Отклонение <br /> от плановой <br /> нагрузки
                    </Th>
                    <Th width={"5%"}>
                      Количество <br /> неисправных <br /> светильников
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{shuno.id}</Td>
                    <Td>{shuno.name}</Td>
                    <Td>3434</Td>
                    <Td>234</Td>
                    <Td></Td>
                    <Td>{shuno.name}</Td>
                    <Td>{shuno.name}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          ))}
        </Box>

        {loadedShunosWithRecords.map((shuno) => (
          <TableContainer key={shuno.id}>
            <Table onClick={() => openDetailPage(shuno.id?.toString()!)}>
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
                  <Td>{shuno.records[0]?.consumption} Вт</Td>
                  <Td>{shuno.records[1]?.consumption} Вт</Td>
                  <Td>{shuno.records[2]?.consumption} Вт</Td>
                  <Td>{shuno.records[3]?.consumption} Вт</Td>
                  <Td>{shuno.records[4]?.consumption} Вт</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
