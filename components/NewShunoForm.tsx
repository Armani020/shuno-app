import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Shuno } from "@mongo/models/shuno";
import {
  actionStyle,
  containerStyle,
  formControlStyle,
  inputStyle,
} from "@styles/NewRecordStyles";
import { ChangeEvent, useState } from "react";

type NewShunoFormProps = {
  onAddShuno: (enteredRecordData: Shuno) => void;
};

const NewShunoForm = (props: NewShunoFormProps) => {
  const [average, setAverage] = useState<number>(0);
  const [form, setForm] = useState({
    shuno: "",
    address: "",
    controller: "",
    w150: "",
    w130: "",
    w70: "",
    average_consumption: "",
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setAverage(calculateAverage());
  };

  const calculateAverage = () => {
    const average =
      Number(form.w70) * 70 + Number(form.w130) * 130 + Number(form.w150) * 150;
    const lampsNumber =
      Number(form.w70) + Number(form.w130) + Number(form.w150);
    return average / lampsNumber;
  };

  const submit = () => {
    if (!form.shuno || form.shuno === "") {
      console.log("shuno name is empty!");
      return;
    }
    if (!form.address || form.address === "") {
      console.log("address is empty!");
      return;
    }
    if (!form.controller || form.controller === "") {
      console.log("controller is empty!");
      return;
    }
    if (!form.w150 || form.w150 === "") {
      form.w150 = "0";
    }
    if (!form.w130 || form.w130 === "") {
      form.w130 = "0";
    }
    if (!form.w70 || form.w70 === "") {
      form.w70 = "0";
    }

    const recordData: Shuno = {
      name: form.shuno,
      address: form.address,
      controller: form.controller,
      lamps: {
        w150: Number(form.w150),
        w130: Number(form.w130),
        w70: Number(form.w70),
      },
    };

    console.log(recordData);
    props.onAddShuno(recordData);
  };

  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="name">Имя ШУНО</FormLabel>
          <Input
            id="name"
            name="shuno"
            value={form.shuno}
            onChange={changeHandler}
            placeholder="Введите имя ШУНО"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="address">Адрес</FormLabel>
          <Input
            id="address"
            name="address"
            value={form.address}
            onChange={changeHandler}
            placeholder="Введите адрес"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="controller">Контроллер</FormLabel>
          <Input
            id="controller"
            name="controller"
            value={form.controller}
            onChange={changeHandler}
            placeholder="Введите контроллер"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="150w lamp">Количество 150w</FormLabel>
          <Input
            type="number"
            id="150w lamp"
            name="w150"
            value={form.w150}
            onChange={changeHandler}
            placeholder="Введите количество"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="130w lamp">Количество 130w</FormLabel>
          <Input
            type="number"
            id="130w lamp"
            name="w130"
            value={form.w130}
            onChange={changeHandler}
            placeholder="Введите количество"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="70w lamp">Количество 70w</FormLabel>
          <Input
            type="number"
            id="70w lamp"
            name="w70"
            value={form.w70}
            onChange={changeHandler}
            placeholder="Введите количество"
          />
        </Box>

        <Center height="50px">
          <Divider />
        </Center>

        <Box>
          <FormLabel>Cреднее потребление на точку</FormLabel>
          <Input
            type="number"
            id="average_consumption"
            name="average_consumption"
            readOnly={true}
            value={average}
            onChange={changeHandler}
          />
        </Box>

        <Box sx={actionStyle}>
          <Button bg="blue.400" onClick={submit}>
            Добавить ШУНО
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewShunoForm;
