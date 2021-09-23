import React, { useState } from "react";
import { sendClinicData } from "../../store/clinics-actions";
import { useDispatch } from "react-redux";

const DetailsForm = (props) => {
  const dispatch = useDispatch();
  const [imageInput, setImageInput] = useState("")
  const [selectInput, setSelectInput] = useState("");

  const updatedClinicImages = {
    id: props.clinic.id,
    newImage: imageInput,
    imageType: selectInput,
  };

  const uploadImageHandler = () => {
    dispatch(sendClinicData(updatedClinicImages));
    console.log("form", updatedClinicImages);
  };

  const options = [undefined, "Front", "Exterior", "Interior"];
  return (
    <div className="card-body">
      <div className="form-group">
        <label>Image Type</label>
        <select
          className="ng-pristine ng-valid ng-empty ng-touched"
          name="imageType"
          onChange={(e) => setSelectInput(e.target.value)}
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <br />
      <div className="form-group">
        <label>
          Photo (Select Image it will upload automatically and wait for key *)
        </label>
        <input
          type="text"
          required
          name="image"
          className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
          onChange={(e) => setImageInput(e.target.value)}
        />
      </div>
      <br />
      <button
        className="btn btn-info float-start"
        type="file"
        accept="image/*"
        ngf-max-size="5MB"
      >
        Select File
      </button>
      <button
        className="btn btn-primary float-end"
        onClick={uploadImageHandler}
      >
        Upload Image
      </button>
    </div>
  );
};

export default DetailsForm;
