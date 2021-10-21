import React from "react";

const TestsHeader = (props) => {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h4>Clinic: {props.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestsHeader;
