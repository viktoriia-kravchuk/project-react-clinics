import React from "react";
import { useSelector } from "react-redux";

const ClinicCardItem = (props) => {
  const selectedClinic = useSelector((state) => state.labTests.clinicId);

  const activeClass =
    selectedClinic === props.value
      ? "active-clinic img-thumbnail text-center "
      : "img-thumbnail text-center";


  return (
    <div className="col-sm-6 col-md-4 col-sm-4 p-2">
      <div className={activeClass}>
        <img
          style={{ width: "80px !important" }}
          width="80px"
          src="https://dashboard.tamariaclinic.com/imgs/clinic-building.svg"
          alt="clinic"
        />
        <div className="caption">
          <h5 className="text-center">{props.name}</h5>
          <p className="text-center">
            <button
              onClick={props.onClickHandler}
              value={props.value}
              className="btn btn-primary"
            >
              Get Clinic Stats
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardItem;
