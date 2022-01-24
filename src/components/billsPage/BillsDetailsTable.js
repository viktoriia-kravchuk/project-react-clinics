import React, { Fragment } from "react";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const BillsDetailsTable = (props) => {
  return (
    <div className="card shadow border-left-primary">
      <div className="card-header text-primary">{`Clinic Bills Stats for ${props.date} : ${props.bills.length} Bills Generated`}</div>
      <div className="card-body">
        <div className="row">
          {props.bills.length === 0 ? (
            <h4 className="text-primary text-center">
              No Bills Generated <FontAwesomeIcon icon={faSadTear} />
            </h4>
          ) : (
            <Fragment>
              <TableHeader /> <TableBody bills={props.bills} />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillsDetailsTable;
