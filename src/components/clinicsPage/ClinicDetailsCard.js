import React from "react";
import DetailsForm from "./DetailsForm";
import { useSelector } from "react-redux";
import Notification from "../UI/Notification";
const ClinicDetailsCard = (props) => {

  const notification = useSelector((state) => state.clinicDetails.notifications);
  const clinic = props.clinic;
  console.log("card", clinic);

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
      <div className="card-header">
        <h4>Clinic: {clinic.name}</h4>
      </div>
      <div className="card-body">
        <div className="card">
          <div className="card-header">
            <h3 className="text-primary">Image Uploader For Clinic</h3>
          </div>
          <DetailsForm clinic = {clinic}/>
          {notification && (
        <Notification
          status={notification.status}
          title={notification.status}
          message={notification.message}
        />
      )}
        </div>
      </div>
      <div className="row">{images}</div>
    </div>
  );
};

export default ClinicDetailsCard;
