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
import { useRef } from "react";

type NewShunoFormProps = {
  onAddShuno: (enteredRecordData: any) => void;
};

const NewShunoForm = (props: NewShunoFormProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const controllerInputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const enteredName = nameInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredController = controllerInputRef.current?.value;

    if (enteredName == null || undefined) {
      return;
    }
    if (enteredAddress == null || undefined) {
      return;
    }
    if (enteredController?.length == 0) {
      return;
    }

    const recordData = {
      name: enteredName,
      address: enteredAddress,
      controller: enteredController,
    };

    console.log(recordData);
    props.onAddShuno(recordData);
  };

  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="name">Имя ШУНО</FormLabel>
          <Input id="name" placeholder="Введите имя ШУНО" ref={nameInputRef} />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="address">Адрес</FormLabel>
          <Input
            id="address"
            placeholder="Введите адрес"
            ref={addressInputRef}
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="controller">Контроллер</FormLabel>
          <Input
            id="controller"
            placeholder="Введите контроллер"
            ref={controllerInputRef}
          />
        </Box>
        <Box sx={actionStyle} onClick={submit}>
          <Button bg="blue.400">Добавить ШУНО</Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewShunoForm;
