import React from "react";

const TableRowItem = (props) => {
    const medicine = props.medicine;

    return (<tr>
        <td>{medicine.id}</td>
        <td>{medicine.brand}</td>
        <td>{medicine.salt}</td>
        <td>{medicine.content}</td>
        <td>{medicine.type}</td>
        <td>{medicine.available}</td>
        <td>{medicine.unit_mrp}</td>
        <td>{medicine.dose_per_unit}</td>
        <td>{medicine.expiry}</td>
        <td><button className="btn btn-success btn-sm" disabled>Update Dose</button></td>
    </tr>)
}

export default TableRowItem;