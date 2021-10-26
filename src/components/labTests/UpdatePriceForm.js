import React, { useState, useEffect } from "react";

import FormFooter from "../UI/FormFooter";

const UpdatePriceForm = (props) => {
  const [price, setPrice] = useState(props.test.price);
  const [touched, setIsTouched] = useState(false);
  const [test, setTest] = useState(props.test);

  const setPriceHandler = (event) => {
    setPrice(event.target.value);
    setIsTouched(true);
  };

  useEffect(() => {
    if (touched) {
      setTest({ ...test, price: price });
    }
  }, [touched, price]);


  return (
    <div className="card">
      <div className="card-body">
        <h5>Clinic: {props.clinic}</h5>
        <h6>Name: {test.name}</h6>
        <input
          type="number"
          value={price}
          onChange={setPriceHandler}
          className="form-control"
        />
      </div>
      <FormFooter onClose={props.onClose} onSubmit={event => props.updatePriceHandler(test)} />
    </div>
  );
};

export default UpdatePriceForm;
