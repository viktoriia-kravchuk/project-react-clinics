import React from "react";
import FormFooter from "../UI/FormFooter";

const UpdateTestForm = (props) => {
    return (
        <div className="card">
          <div className="card-body">
            <h5>Clinic:</h5>
            <h6>Name:</h6>
            <form>

            </form>
          </div>
          <FormFooter onClose={props.onClose} onSubmit={event => props.updatePriceHandler(test)} />
        </div>
      );

}

export default UpdateTestForm;