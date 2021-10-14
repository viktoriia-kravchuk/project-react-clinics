import React from "react";
import SelectForm from "./SelectForm";
import SortingButtons from "./SortingButtons";

const TableHeader = (props) => {
    return (<div className="card-header">
        <div className="row" style={{padding: "10px"}}>
            <SelectForm/>
            <SortingButtons/>
        </div>
    </div>)
}

export default TableHeader;