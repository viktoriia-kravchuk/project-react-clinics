import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { billsActions } from "../../store/bills/bills-slice";
import SelectForm from "./SelectForm";
import CalendarForm from "./CalendarForm";


const PageHeader = (props) => {
  const selectedDate = useSelector((state) => state.bills.selectedDate);
  const [chosenDate, setChosenDate] = useState(new Date(selectedDate));
  const dispatch = useDispatch();

  //console.log(chosenDate);

  const handleDateChange = (date) => {
    if (date === "reset"){
      date = new Date("2021-01-01")
    } 
    console.log("date handler ", date)
    setChosenDate(date);
    const newDate = date;
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    console.log("new date", newDate.toJSON().slice(0, 10));
    dispatch(billsActions.setSelectedDate(newDate.toJSON().slice(0, 10)));
  };
  


  return (
    <div className="card shadow border-left-primary">
      <div className="card-header">
        <div className="row">
          <SelectForm />
          <div className="col-md-7">
            <div className="row">
              <CalendarForm selectedDate={chosenDate} onChange={handleDateChange} />
              <div className="col-md-6 col-sm-12">
                <div className="col-md-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={event => handleDateChange("reset")}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
