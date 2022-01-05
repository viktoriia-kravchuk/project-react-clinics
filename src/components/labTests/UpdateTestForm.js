import React, { useState } from "react";
import FormFooter from "../UI/FormFooter";

const UpdateTestForm = (props) => {
  const [testData, setTestData] = useState(props.test);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <h5>Clinic:{props.clinic}</h5>
        <form
          className="form"
        >
          <label htmlFor="name" className="form-label">
            <b>Test Name</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Lab Test Name"
            className="form-control"
            value={testData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="code" className="form-label">
            <b>Test Code</b>
          </label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Lab Test Code"
            className="form-control"
            value={testData.code}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="done_by" className="form-label">
            <b>Test Done By</b>
          </label>
          <input
            type="text"
            id="done_by"
            name="done_by"
            placeholder="Lab Test Done By"
            className="form-control"
            value={testData.done_by}
            onChange={handleChange}
          />
        </form>
      </div>
      <FormFooter
        onClose={props.onClose}
        onSubmit={(event) => props.updateTestHandler(testData)}
      
      />
    </div>
  );
};

export default UpdateTestForm;
