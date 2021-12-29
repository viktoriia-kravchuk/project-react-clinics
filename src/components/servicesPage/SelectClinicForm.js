import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicServicesData } from "../../store/services/services-actions";

const SelectClinicForm = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);
  const defaultId = useSelector((state) => state.services.clinicId);
  const [selectedClinic, setSelectedClinic] = useState(defaultId);
  const dispatch = useDispatch();

  const onSelectHandler = (event) => {
    setSelectedClinic(event.target.value);
  };
  useEffect(() => {
    console.log("selected Clinic Id", selectedClinic);
    dispatch(fetchClinicServicesData(selectedClinic));
  }, [dispatch, selectedClinic]);

  return (
    <div className="col-md-4 col-sm-4">
      <h6>
        Clinic :{" "}
        <select onChange={onSelectHandler} value={selectedClinic}>
          {clinics.map((clinic) => {
            return (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name}
              </option>
            );
          })}
        </select>
      </h6>
    </div>
  );
};

export default SelectClinicForm;
