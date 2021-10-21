import React from "react";
import SelectForm from "./SelectForm";
import SortingButtons from "./SortingButtons";
import SearchingForm from "./SearchingForm";
import DownloadButton from "./DownloadButton";
import AddMecinine from "./AddMedicine";

const TableHeader = (props) => {
  return (
    <div className="card-header">
      <div className="row" style={{ padding: "10px" }}>
        <SelectForm />
        <SearchingForm handleInputChange={props.handleInputChange} />
        <div className="col-md-3 col-sm-3">
          <AddMecinine />
          <DownloadButton />
        </div>
        <SortingButtons />
      </div>
    </div>
  );
};

export default TableHeader;
