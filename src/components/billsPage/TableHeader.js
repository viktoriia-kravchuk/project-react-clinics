import React from "react";

const TableHeader = (props) => {
  return (
    <div className="row" style={{margin: "0 auto", padding:"0"}}>
      <div className="col-md-2 heading ">Name</div>
      <div className="col-md-1 heading ">Age</div>
      <div className="col-md-2 heading ">Date</div>
      <div className="col-md-1 heading ">Status</div>
      <div className="col-md-1 heading ">Total</div>
      <div className="col-md-1 heading ">Discount</div>
      <div className="col-md-1 heading ">Paid</div>
      <div className="col-md-3 heading ">
        <span className="float-end">Expand</span>
      </div>
    </div>
  );
};

export default TableHeader;
