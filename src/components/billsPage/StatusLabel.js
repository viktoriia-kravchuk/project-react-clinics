import React from "react";

const StatusLabel = (props) => {
  return props.status === 1 ? (
    <span className="badge bg-danger">Not Paid</span>
  ) : props.status === 2 ? (
    <span className="badge bg-success">Paid</span>
  ) : (
    <span className="badge bg-warning">Partial Paid</span>
  );
};

export default StatusLabel;
