import React from "react";

const statusList = {
  9: ["Waiting Approvals"],
  5: ["Not Verified"],
  4: ["Not Registered"],
  6: ["No Profile"],
  7: ["No Address"],
  8: ["No Documents"],
};

const StatusCard = (props) => {
  if (props.status === 10) {
    return <span className="badge bg-success">Profile Active</span>;
  } else if (props.status === 11) {
    return <span className="badge bg-danger">Profile Inactive</span>;
  } else {
    return <span className="badge bg-warning">{statusList[props.status]}</span>;
  }
};

export default StatusCard;
