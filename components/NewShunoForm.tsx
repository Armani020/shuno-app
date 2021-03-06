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
import { ChangeEvent, useEffect, useState } from "react";

type NewShunoFormProps = {
  onAddShuno: (enteredRecordData: Shuno) => void;
};

const NewShunoForm = (props: NewShunoFormProps) => {
  const [form, setForm] = useState({
    shuno: "",
    address: "",
    controller: "",
    w150: "",
    w130: "",
    w70: "",
    average: "",
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setForm({ ...form, average: calculateAverage().toString() });
  }, [form.w150, form.w130, form.w70]);

  const calculateAverage = () => {
    const average =
      Number(form.w70) * 70 + Number(form.w130) * 130 + Number(form.w150) * 150;
    const lampsNumber =
      Number(form.w70) + Number(form.w130) + Number(form.w150);
    const average_consumption = average / lampsNumber;
    if (average_consumption) {
      return average_consumption.toFixed(1);
    }
    return 0;
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
      average_consumption: Number(form.average),
    };

    console.log(recordData);
    props.onAddShuno(recordData);
  };

  return (
    <Box sx={containerStyle}>
      <FormControl isRequired sx={formControlStyle}>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="name">?????? ????????</FormLabel>
          <Input
            id="name"
            name="shuno"
            value={form.shuno}
            onChange={changeHandler}
            placeholder="?????????????? ?????? ????????"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="address">??????????</FormLabel>
          <Input
            id="address"
            name="address"
            value={form.address}
            onChange={changeHandler}
            placeholder="?????????????? ??????????"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="controller">????????????????????</FormLabel>
          <Input
            id="controller"
            name="controller"
            value={form.controller}
            onChange={changeHandler}
            placeholder="?????????????? ????????????????????"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="150w lamp">???????????????????? 150w</FormLabel>
          <Input
            type="number"
            id="150w lamp"
            name="w150"
            value={form.w150}
            onChange={changeHandler}
            placeholder="?????????????? ????????????????????"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="130w lamp">???????????????????? 130w</FormLabel>
          <Input
            type="number"
            id="130w lamp"
            name="w130"
            value={form.w130}
            onChange={changeHandler}
            placeholder="?????????????? ????????????????????"
          />
        </Box>
        <Box sx={inputStyle}>
          <FormLabel htmlFor="70w lamp">???????????????????? 70w</FormLabel>
          <Input
            type="number"
            id="70w lamp"
            name="w70"
            value={form.w70}
            onChange={changeHandler}
            placeholder="?????????????? ????????????????????"
          />
        </Box>

        <Center height="50px">
          <Divider />
        </Center>

        <Box>
          <FormLabel>C???????????? ?????????????????????? ???? ?????????? (????)</FormLabel>
          <Input
            type="number"
            id="average_consumption"
            name="average_consumption"
            readOnly={true}
            value={form.average}
          />
        </Box>

        <Box sx={actionStyle}>
          <Button bg="blue.400" onClick={submit}>
            ???????????????? ????????
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default NewShunoForm;
