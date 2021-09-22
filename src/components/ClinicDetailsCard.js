import React from "react";

const ClinicDetailsCard = (props) => {
  const clinic = props.clinic;
  console.log(clinic);

  const images = !clinic.images ? (
    <h3 className="text-center">
      {" "}
      No Images Available For Clinic Please Upload Some{" "}
    </h3>
  ) : (
    "Showing images here"
  );

  return (
    <div className="card">
      <div className="card-header">{clinic.name}</div>
      <div className="card-body">{images}</div>
    </div>
  );
};

export default ClinicDetailsCard;
