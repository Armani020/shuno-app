import { createElement, forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { datePickerInputStyle } from "@styles/NewRecordStyles";

const initialState = {
  date: null,
  showDatepicker: false,
};

type DatePickerProps = {
  dateChange: (date: Date | null) => void;
};

const MyDatePicker = (props: DatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return <input style={datePickerInputStyle} {...props} />;
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => {
        setStartDate(date);
        props.dateChange(date);
      }}
      dateFormat="dd.MM.yyyy"
      locale={ru}
      customInput={createElement(forwardRef(CustomInput))}
    />
  );
};

export default MyDatePicker;
