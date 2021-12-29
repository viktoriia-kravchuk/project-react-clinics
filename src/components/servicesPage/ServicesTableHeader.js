import React from "react";
import SelectClinicForm from "./SelectClinicForm";

const ServicesTableHeader = (props) => {
  return (
    <div className="card-header">
      <div className="row" style={{ padding: "10px" }}>
        <SelectClinicForm/>
        <div className="col-8">
          {" "}
          <button className="btn btn-primary btn-sm float-end">
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesTableHeader;
