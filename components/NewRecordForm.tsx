import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { Shuno } from "@mongo/models/shuno";
import {
  actionStyle,
  containerStyle,
  formControlStyle,
  inputStyle,
} from "@styles/NewRecordStyles";
import { useRef, useState } from "react";
import MyDatePicker from "./MyDatePicker";

type NewRecordFormProps = {
  onAddRecord: (enteredRecordData: any) => void;
  shunos: Shuno[];
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
    if (enteredShuno?.length == 0 || null || undefined) {
      return;
    }

    const shunoIdByName = props.shunos.find((shuno) => {
      return shuno.name == enteredShuno?.toString();
    });

    const recordData = {
      date: enteredDate?.toJSON().slice(0, 10),
      consumption: enteredConsumtion,
      shuno_id: shunoIdByName?.id,
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
            placeholder="Введите потребление"
            ref={consumptionInputRef}
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="shuno">ШУНО</FormLabel>
          <Select id="shuno" placeholder="Выберите ШУНО" ref={shunoInputRef}>
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
