import React from "react";
import TableRowItem from "./TableRowItem";

const TableBody = (props) => {
    const sortedMedicines = props.medicines;
    //console.log("table", inventory);
  return (
    <div className="card-body">
      <table
        className="table table-bordered table-responsive"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Salt</th>
            <th>Content</th>
            <th>Type</th>
            <th>Available</th>
            <th>Unit MRP</th>
            <th>Dose/Unit</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>
          {sortedMedicines.map((item) => (
            <TableRowItem medicine={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
