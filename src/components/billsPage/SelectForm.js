import React, { useState} from "react";
import { useSelector } from "react-redux";

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
      <h4>
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
      </h4>
    </div>
  );
};

export default SelectForm;
