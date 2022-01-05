import FormFooter from "../UI/FormFooter";
import React, { useState } from "react";

const AddServiceForm = (props) => {
  const [newService, setNewServiceData] = useState({
    name: "",
    price: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5>Clinic:{props.clinicName}</h5>
        <form className="form">
          <label htmlFor="name" className="form-label">
            <b>Service Name</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Service Name"
            className="form-control"
            value={newService.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="price" className="form-label">
            <b>Price</b>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Service Price"
            className="form-control"
            value={newService.price}
            onChange={handleChange}
          />
          <br />
        </form>
      </div>
      <FormFooter
        onClose={props.onClose}
        onSubmit={(event) => props.onSubmit(newService)}
      />
    </div>
  );
};

export default AddServiceForm;
