import React, { Fragment } from "react";
import TableRowElement from "./TableRowElement";

const TableBody = (props) => {
  return (
    <Fragment >
      {props.bills.map((bill) => (
        <TableRowElement bill={bill} key={bill.bill.created}/>
      ))}
    </Fragment>
  );
};

export default TableBody;
