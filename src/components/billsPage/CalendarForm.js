import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarForm = (props) => {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="input-group" style={{ width: "300px" }}>
        <DatePicker
          selected={props.selectedDate}
          onChange={(date) => props.onChange(date)}
          dateFormat={"dd-MMMM-yyyy"}
          todayButton="Today"
          placeholderText="Select Date"
          calendarStartDay={1}
          showWeekNumbers
          isClearable
          showMonthDropdown
          useShortMonthInDropdown
        >
          </DatePicker>
      </div>
    </div>
  );
};

export default CalendarForm;
