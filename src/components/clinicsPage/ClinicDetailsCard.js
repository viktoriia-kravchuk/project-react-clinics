import React from "react";
import DetailsForm from "./DetailsForm";
import Notification from "../UI/Notification";
import { useSelector } from "react-redux";
import ClinicImages from "./ClinicImages";

const ClinicDetailsCard = (props) => {
  const notification = useSelector(
    (state) => state.clinicDetails.notifications
  );


  return (
    <div className="card">
      <div className="card-header">
        <h4>Clinic: {props.clinic.name}</h4>
      </div>
      <div className="card-body">
        <div className="card">
          <div className="card-header">
            <h3 className="text-primary">Image Uploader For Clinic</h3>
          </div>
          <DetailsForm clinic={props.clinic} />
          {notification && (
            <Notification
              status={notification.status}
              title={notification.status}
              message={notification.message}
            />
          )}
        </div>
        <ClinicImages images={props.clinic.images} />
      </div>
    </div>
  );
};

export default ClinicDetailsCard;
