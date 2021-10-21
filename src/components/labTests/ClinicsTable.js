import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import ClinicCardItem from "./ClinicCardItem";
import { fetchClinicTestsData} from "../../store/labTests/labTests-actions";

const ClinicsTable = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);
  const defaultId = useSelector((state) => state.labTests.clinicId);
  const [selectedClinic, setSelectedClinic] = useState(defaultId);
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    setSelectedClinic(event.target.value)
  };

  useEffect(() => {
    console.log("selectedClinic ID", selectedClinic)
    dispatch(fetchClinicTestsData(selectedClinic));
  }, [dispatch, selectedClinic]);

  return (
    <div className="card-body">
      <div className="row">
        {clinics.map((clinic) => (
          <ClinicCardItem
            key={clinic.id}
            name={clinic.name}
            value={clinic.id}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ClinicsTable;
