import React from "react";
import SearchingForm from "../inventoryPage/SearchingForm";
const TestsHeader = (props) => {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h4>Clinic: {props.name}</h4>
        </div>
        <SearchingForm handleInputChange ={props.handleInputChange}/>
      </div>
    </div>
  );
};

export default TestsHeader;
