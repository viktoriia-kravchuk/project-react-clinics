import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicServicesData } from "../../store/services/services-actions";
import { servicesActions } from "../../store/services/services-slice";

const SelectClinicForm = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);
  const defaultId = useSelector((state) => state.services.clinicId);
  const clinicName = useSelector((state) => state.services.clinicName);
  const [selectedClinic, setSelectedClinic] = useState(defaultId);
  const [selectedClinicName, setSelectedClinicName] = useState(clinicName);
  const dispatch = useDispatch();

  const onSelectHandler = (event) => {
    setSelectedClinic(event.target.value);
    setSelectedClinicName(
      event.target.options[event.target.selectedIndex].text
    );
  };
  useEffect(() => {
    dispatch(fetchClinicServicesData(selectedClinic));
    dispatch(servicesActions.setName(selectedClinicName));
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
