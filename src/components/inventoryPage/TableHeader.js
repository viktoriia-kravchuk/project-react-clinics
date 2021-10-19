import React from "react";
import SelectForm from "./SelectForm";
import SortingButtons from "./SortingButtons";
import SearchingForm from "./SearchingForm";

const TableHeader = (props) => {
    return (<div className="card-header">
        <div className="row" style={{padding: "10px"}}>
            <SelectForm/>
            <SearchingForm handleInputChange = {props.handleInputChange}/>
            <SortingButtons/>
        </div>
    </div>)
}

export default TableHeader;