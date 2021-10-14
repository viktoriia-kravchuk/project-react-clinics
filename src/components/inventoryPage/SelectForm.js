import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicMedicinesData } from "../../store/inventory/inventory-actions";

const SelectForm = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);

  const defaultId = useSelector((state) => state.inventory.clinicId);
  const [selectedClinic, setSelectedClinic] = useState(defaultId);

  const dispatch = useDispatch();

  const onSelectHandler = (event) => {
    setSelectedClinic(event.target.value);
  };

  useEffect(() => {
    //console.log("selected Clinic Id", selectedClinic);
    dispatch(fetchClinicMedicinesData(selectedClinic));
  }, [dispatch, selectedClinic]);

  return (
    <div className="col-md-3 col-sm-3">
      <h4>Clinic : </h4>
      <select onChange={onSelectHandler} value={selectedClinic}>
        {clinics.map((clinic) => {
          return (
            <option key={clinic.id} value={clinic.id}>
              {clinic.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectForm;
