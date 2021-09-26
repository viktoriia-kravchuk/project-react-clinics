import React, { useState } from "react";
import { clinicsActions } from "../../store/clinics-slice";
import { useDispatch, useSelector } from "react-redux";

const DetailsForm = (props) => {
  const dispatch = useDispatch();
  const [imageInput, setImageInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  const clinics = useSelector((state) => state.clinics.clinics);
  const arrayIndex = clinics.findIndex((item) => item.id === props.clinic.id);

  const updatedClinicImages = {
    arrayIndex: arrayIndex,
    newImage: imageInput,
    imageType: selectInput,
  };

  const uploadImageHandler = (event) => {
    event.preventDefault();
    dispatch(clinicsActions.uploadClinicImages(updatedClinicImages));

    setImageInput("");
    setSelectInput("");
  };

  const options = ["Front", "Exterior", "Interior"];
  const selectForm = options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

  return (
    <div className="card-body">
      <form onSubmit={uploadImageHandler}>
        <div className="form-group" key="image">
          <label>Image Type</label>
          <select
            className="ng-pristine ng-valid ng-empty ng-touched"
            name="imageType"
            onChange={(e) => setSelectInput(e.target.value)}
            required
            value={selectInput}
          >
            <option value="undefined" key="undefined">
              {undefined}
            </option>
            {selectForm}
          </select>
        </div>
        <br />
        <div className="form-group" key="text">
          <label>Photo (Image source only)</label>
          <input
            type="text"
            required
            name="image"
            className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
            onChange={(e) => setImageInput(e.target.value)}
            value={imageInput}
          />
        </div>
        <br />
        <button className="btn btn-primary float-end">Upload Image</button>
      </form>
    </div>
  );
};

export default DetailsForm;
