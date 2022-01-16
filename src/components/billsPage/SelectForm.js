import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SelectForm = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);

  const defaultId = useSelector((state) => state.bills.clinicId);
  const [selectedClinic, setSelectedClinic] = useState(defaultId);

  //const dispatch = useDispatch();

  const onSelectHandler = (event) => {
    setSelectedClinic(event.target.value);
  };

  return (
    <div className="col-md-5">
      <h5>
        Clinic :{" "}
        <select onChange={onSelectHandler} value={selectedClinic} disabled>
          {clinics.map((clinic) => {
            return (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name}
              </option>
            );
          })}
        </select>
      </h5>
    </div>
  );
};

export default SelectForm;
