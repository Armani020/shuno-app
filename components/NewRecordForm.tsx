import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  actionStyle,
  containerStyle,
  formControlStyle,
  inputStyle,
} from "@styles/NewRecordStyles";
import { useRef, useState } from "react";
import DatePicker from "./DatePicker";

type NewRecordFormProps = {
  onAddRecord: (enteredRecordData: any) => void;
};

const NewRecordForm = (props: NewRecordFormProps) => {
  const consumptionInputRef = useRef<HTMLInputElement>(null);
  const shunoInputRef = useRef<HTMLSelectElement>(null);

  const [date, setDate] = useState<Date | null>();

  const dateChange = (date: Date | null) => {
    setDate(date);
  };

  const submit = () => {
    const enteredDate = date;
    const enteredConsumtion = consumptionInputRef.current?.value;
    const enteredShuno = shunoInputRef.current?.value;

    if (enteredDate == null || undefined) {
      return;
    }
    if (enteredConsumtion == null || undefined) {
      return;
    }
    if (enteredShuno?.length == 0) {
      return;
    }

    const recordData = {
      date: enteredDate?.toJSON().slice(0, 10),
      consumption: enteredConsumtion,
      shuno: enteredShuno,
    };

    console.log(recordData);
    props.onAddRecord(recordData);
  };

  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="date">Дата</FormLabel>
          <DatePicker dateChange={dateChange} />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="consumption">Потребление</FormLabel>
          <Input
            type="number"
            id="consumption"
            placeholder="Введите потребление"
            ref={consumptionInputRef}
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="shuno">ШУНО</FormLabel>
          <Select id="shuno" placeholder="Выберите ШУНО" ref={shunoInputRef}>
            <option>ШУНО-1</option>
          </Select>
        </Box>
        <Box sx={actionStyle} onClick={submit}>
          <Button bg="blue.400">Добавить запись</Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewRecordForm;
