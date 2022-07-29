import { mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Consumption, Data, ShunoWithRecords } from "@mongo/models/shuno";
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
          <TableContainer>
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
                  <Th width={"5%"} colSpan={3} sx={consumptionTableStyle}>
                    Плановое <br /> количество <br /> светильников
                  </Th>
                  <Th colSpan={3} textAlign="center">
                    Дата
                    {/* {shuno.records[0]?.date.toString().slice(0, 10)} */}
                  </Th>
                </Tr>
                <Tr>
                  <Th>70w</Th>
                  <Th>130w</Th>
                  <Th>150w</Th>
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
                {loadedShunosWithRecords.map((shuno) => (
                  <TableBodyListItem key={shuno.id} shuno={shuno} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

type TableBodyListItemProps = {
  shuno: ShunoWithRecords;
};

const TableBodyListItem = ({ shuno }: TableBodyListItemProps) => {
  const lastRecord: Consumption = shuno.records[0];
  return (
    <>
      <Tr>
        <Td rowSpan={2}>{shuno.id?.toString().slice(0, 2)}</Td>
        <Td rowSpan={2}>{shuno.name}</Td>
        <Td rowSpan={2}>3434</Td>
        <Td rowSpan={2}>{shuno.lamps.w70} шт</Td>
        <Td rowSpan={2}>{shuno.lamps.w130} шт</Td>
        <Td rowSpan={2}>{shuno.lamps.w150} шт</Td>
        <Td colSpan={3}>
          {lastRecord ? lastRecord.date.toString().slice(0, 10) : "Нет данных"}
        </Td>
      </Tr>
      <Tr key={shuno.name}>
        <Td>{lastRecord ? lastRecord.consumption : "Нет данных"}</Td>
        <Td>{3434 - 3423}</Td>
        <Td>~ 2</Td>
      </Tr>
    </>
  );
};

export default Home;
