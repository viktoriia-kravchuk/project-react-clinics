import React from "react";
import { useSelector } from "react-redux";
import Notification from "../UI/Notification";

const FormFooter = (props) => {
  const notification = useSelector(
    (state) => state.clinicDetails.notifications
  );
  return (
    <div className="modal-footer">
      {notification && (
        <Notification
          status={notification.status}
          title={notification.status}
          message={notification.message}
        />
      )}
      <button className="btn btn-primary float-end" onClick={props.onSubmit}>
        Add
      </button>
      <button
        className="btn btn-outline-secondary float-end"
        onClick={props.onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default FormFooter;
