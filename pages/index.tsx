import { mainStyle } from "@styles/NewRecordStyles";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
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
                  <Th colSpan={3} width={"5%"} sx={consumptionTableStyle}>
                    Плановое <br /> количество <br /> светильников
                  </Th>
                  <Th rowSpan={2} width={"2%"}>
                    Среднее <br /> потребление <br /> на точку
                  </Th>
                  <Th colSpan={3} textAlign="center">
                    Дата
                    {/* {shuno.records[0]?.date.toString().slice(0, 10)} */}
                  </Th>
                </Tr>
                <Tr>
                  <Th>70 w</Th>
                  <Th>130 w</Th>
                  <Th>150 w</Th>
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
                <Th>1</Th>
                <Th>2</Th>
                <Th>3</Th>
                <Th colSpan={3}>4</Th>
                <Th>5</Th>
                <Th>6</Th>
                <Th>7</Th>
                <Th>8</Th>
                {loadedShunosWithRecords.map((shuno) => (
                  <TableBodyListItem
                    key={shuno.id}
                    shuno={shuno}
                    index={loadedShunosWithRecords.indexOf(shuno)}
                    onClickShuno={openDetailPage}
                  />
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
  index: number;
  shuno: ShunoWithRecords;
  onClickShuno: (shunoId: string) => void;
};

const TableBodyListItem = ({
  index,
  shuno,
  onClickShuno,
}: TableBodyListItemProps) => {
  const lastRecord: Consumption = shuno.records[0];
  const shunoConsumption =
    shuno.lamps.w150 * 150 + shuno.lamps.w130 * 130 + shuno.lamps.w70 * 70;
  const date = lastRecord?.date.toString().slice(0, 10);
  const difference = shunoConsumption - lastRecord?.consumption;
  const brokenLampsNumber = (difference / shuno.average_consumption).toFixed(2);
  return (
    <>
      <Fragment onClick={() => onClickShuno(shuno.id)}>
        <Tr>
          <Td rowSpan={2}>{index + 1}</Td>
          <Td rowSpan={2}>{shuno.name}</Td>
          <Td rowSpan={2}>{shunoConsumption} Вт</Td>
          <Td rowSpan={2}>{shuno.lamps.w70} шт</Td>
          <Td rowSpan={2}>{shuno.lamps.w130} шт</Td>
          <Td rowSpan={2}>{shuno.lamps.w150} шт</Td>
          <Td rowSpan={2}>{shuno.average_consumption} Вт</Td>
          <Td colSpan={3}>{lastRecord ? date : "Нет данных"}</Td>
        </Tr>
        <Tr key={shuno.name}>
          <Td>{lastRecord ? lastRecord.consumption + " Вт" : "Нет данных"}</Td>
          <Td>{lastRecord ? difference + " Вт" : "Нет данных"}</Td>
          <Td>{lastRecord ? "~ " + brokenLampsNumber : "Нет данных"}</Td>
        </Tr>
      </Fragment>
    </>
  );
};

export default Home;
