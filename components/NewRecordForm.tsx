import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  containerStyle,
  formControlStyles,
  inputStyle,
} from "@styles/NewRecordStyles";
import DatePicker from "./DatePicker";

const NewRecordForm = () => {
  return (
    <Box sx={containerStyle}>
      <FormControl isRequired={true} sx={formControlStyles}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="date">Дата</FormLabel>
          <DatePicker />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="consumption">Потребление</FormLabel>
          <Input type="number" id="consumption" />
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewRecordForm;
