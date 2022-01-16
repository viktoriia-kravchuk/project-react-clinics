import React, { useState } from "react";
import { useSelector } from "react-redux";

import SelectForm from "./SelectForm";
import CalendarForm from "./CalendarForm";

const PageHeader = (props) => {
  //const selectedDate = useSelector((state) => state.bills.selectedDate);
  const [chosenDate, setChosenDate] = useState(new Date());

  console.log(chosenDate);

  const handleChange = (date) => {
    setChosenDate(date);
  };

  return (
    <div className="card shadow border-left-primary">
      <div className="card-header">
        <div className="row">
          <SelectForm />
          <div className="col-md-7">
            <div className="row">
              <CalendarForm selectedDate={chosenDate} onChange={handleChange} />
              <div className="col-md-6 col-sm-12">
                <div className="col-md-3">
                  <button className="btn btn-outline-secondary btn-sm">
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
