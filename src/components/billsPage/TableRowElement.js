import React, { useState } from "react";
import Moment from "react-moment";
import StatusLabel from "./StatusLabel";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsCard from "./DetailsCard";

Moment.globalFormat = "L h:mm A";

const TableRowElement = (props) => {
  const [detailsAreShown, setShownDetails] = useState(false);
  const bill = props.bill;
  const date = <Moment unix>{bill.bill.created}</Moment>;

  const handleDetailsShowing = () => {
    setShownDetails(!detailsAreShown);

  };

  return (
    <div
      className="card shadow"
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      <div className="card-header" onClick={handleDetailsShowing}>
        <div className="row">
          <div className="col-md-2 text-capitalize">{bill.patient.name}</div>
          <div className="col-md-1">{bill.patient.age}</div>
          <div className="col-md-2">{date}</div>
          <div className="col-md-1">
            <StatusLabel status={bill.bill.status} />
          </div>
          <div className="col-md-1">{`₹ ${bill.bill.amount}`}</div>
          <div className="col-md-1">{`₹ ${bill.bill.discount}`}</div>
          <div className="col-md-1">{`₹ ${bill.bill.paid}`}</div>
          <div className="col-md-3">
            {detailsAreShown ? (
              <FontAwesomeIcon icon={faArrowDown} className="float-end" />
            ) : (
              <FontAwesomeIcon icon={faArrowRight} className="float-end" />
            )}
          </div>
        </div>
      </div>
      {detailsAreShown ? (
        <DetailsCard invoices={bill.bill.medicine_invoices} total={bill.bill.amount} />
      ) : null}
    </div>
  );
};

export default TableRowElement;
