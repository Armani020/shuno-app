import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { Consumption, Shuno } from "@mongo/models/shuno";
import {
  actionStyle,
  containerStyle,
  formControlStyle,
  inputStyle,
} from "@styles/NewRecordStyles";
import { ChangeEvent, useState } from "react";
import MyDatePicker from "./MyDatePicker";

type NewRecordFormProps = {
  onAddRecord: (enteredRecordData: Consumption) => void;
  shunos: Shuno[];
};

const NewRecordForm = (props: NewRecordFormProps) => {
  const [date, setDate] = useState<Date | null>();
  const [form, setForm] = useState({ consumption: "", shuno: "" });

  const dateChange = (date: Date | null) => {
    setDate(date);
  };

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = () => {
    if (!date) {
      console.log("date is empty!");
      return;
    }
    if (!form.consumption || form.consumption === "") {
      console.log("consumption is empty!");
      return;
    }
    if (!form.shuno || form.shuno === "") {
      console.log("shuno is empty!");
      return;
    }

    const shunoIdByName = props.shunos.find((shuno) => {
      return shuno.name == form.shuno.toString();
    });

    const recordData: Consumption = {
      date: date,
      consumption: Number(form.consumption),
      shuno_id: shunoIdByName!.id!,
    };

    console.log(recordData);
    props.onAddRecord(recordData);
  };

  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="date">Дата</FormLabel>
          <MyDatePicker dateChange={dateChange} />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="consumption">Потребление</FormLabel>
          <Input
            type="number"
            id="consumption"
            name="consumption"
            value={form.consumption}
            onChange={changeHandler}
            placeholder="Введите потребление"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="shuno">ШУНО</FormLabel>
          <Select
            id="shuno"
            name="shuno"
            value={form.shuno}
            onChange={changeHandler}
            placeholder="Выберите ШУНО"
          >
            {props.shunos.map((shuno) => (
              <option key={shuno.id}>{shuno.name}</option>
            ))}
          </Select>
        </Box>
        <Box sx={actionStyle}>
          <Button bg="blue.400" onClick={submit}>
            Добавить запись
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewRecordForm;
