import { DateSingleInput } from "@datepicker-react/styled";
import { RefObject, useReducer } from "react";

const initialState = {
  date: null,
  showDatepicker: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "focusChange":
      return { ...state, showDatepicker: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

type DatePickerProps = {
  dateChange: (date: Date | null) => void;
};

const DatePicker = (props: DatePickerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DateSingleInput
      displayFormat="dd.MM.yyyy"
      onDateChange={(data) => {
        dispatch({ type: "dateChange", payload: data });
        props.dateChange(data.date)
      }}
      onFocusChange={(focusedInput) =>
        dispatch({ type: "focusChange", payload: focusedInput })
      }
      date={state.date} // Date or null
      showDatepicker={state.showDatepicker} // Boolean
    />
  );
};

export default DatePicker;
