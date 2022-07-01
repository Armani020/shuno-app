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
import DatePicker from "./DatePicker";

const NewRecordForm = () => {
  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="date">Дата</FormLabel>
          <DatePicker />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="consumption">Потребление</FormLabel>
          <Input type="number" id="consumption" placeholder="Введите потребление"/>
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="shuno">ШУНО</FormLabel>
          <Select id="shuno" placeholder="Выберите ШУНО">
            <option>ШУНО-1</option>
          </Select>
        </Box>
        <Box sx={actionStyle}>
          <Button bg="blue.400" onClick={() => {}}>
            Добавить запись
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewRecordForm;
