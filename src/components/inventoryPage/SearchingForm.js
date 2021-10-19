import React from "react";

const SearchingForm = (props) => {
  return (
    <div className="col-md-3 col-sm-3">
      {" "}
      <form style={{ width: "80%" }}>
        <input
          onChange={props.handleInputChange}
          className="form-control form-control-sm"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchingForm;
