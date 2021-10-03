import React, { useState } from "react";
import { useSelector } from "react-redux";
import Notification from "../UI/Notification";

const UpdateForm = (props) => {
  const [clinicData, setClinicData] = useState(props.currentValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    latitude: true,
    longitude: true,
    openHour: true,
    closingHour: true,
  });

  const notification = useSelector(
    (state) => state.clinicDetails.notifications
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = clinicData.name;
    const enteredAddress = clinicData.address;
    const enteredLatitude = clinicData.lat;
    const enteredLongitude = clinicData.lng;
    const enteredOpenHour = clinicData.clinic_open;
    const enteredClosingHour = clinicData.clinic_close;

    const enteredNameIsValid = enteredName.trim() !== "";
    const enteredAddressIsValid = enteredAddress.trim !== "";
    const enteredLatitudeIsValid =
      enteredLatitude >= -90 && enteredLatitude <= 90;
    const enteredLongitudeIsValid =
      enteredLongitude >= -180 && enteredLongitude <= 80;
    const enteredOpenHourIsValid = enteredOpenHour > 0 && enteredOpenHour < 24;
    const enteredClosingHourIsValid =
      enteredClosingHour > 0 && enteredClosingHour < 24;

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      latitude: enteredLatitudeIsValid,
      longitude: enteredLongitudeIsValid,
      openHour: enteredOpenHourIsValid,
      closingHour: enteredClosingHourIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredLatitudeIsValid &&
      enteredLongitudeIsValid &&
      enteredClosingHourIsValid &&
      enteredOpenHourIsValid;

    if (!formIsValid) {
      return;
    }

    // dispatch update here

    setClinicData((prevState) => ({
      ...prevState,
      name: enteredName,
      address: enteredAddress,
      lat: enteredLatitude,
      lng: enteredLongitude,
      clinic_open: enteredOpenHour,
      clinic_close: enteredClosingHour,
    }));
    props.updateHandler(clinicData);
  };

  return (
    <div className="card">
      <form className="card-body form" onSubmit={submitHandler}>
        <label htmlFor="name" className="form-label">
          <b>Clinic Name</b>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Clinic Name"
          className="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
          value={clinicData.name}
          onChange={handleChange}
        />
        {!formInputsValidity.name && (
          <span className="text-danger">Please enter a valid name.</span>
        )}
        <br />
        <label htmlFor="address" className="form-label">
          <b>Address</b>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          className="form-control"
          value={clinicData.address}
          onChange={handleChange}
        />
        {!formInputsValidity.address && (
          <span className="text-danger">Please enter a valid address.</span>
        )}
        <br />
        <label htmlFor="latitude" className="form-label">
          <b>Latitude</b>
        </label>
        <input
          type="text"
          id="latitude"
          placeholder="Latitude"
          className="form-control"
          name="lat"
          value={clinicData.lat}
          onChange={handleChange}
        />
        {!formInputsValidity.latitude && (
          <span className="text-danger">Please enter a valid latitude.</span>
        )}
        <br />
        <label htmlFor="longitude" className="form-label">
          <b>Longitude</b>
        </label>
        <input
          type="text"
          id="longitude"
          name="lng"
          placeholder="Longitude"
          className="form-control"
          value={clinicData.lng}
          onChange={handleChange}
        />
        {!formInputsValidity.longitude && (
          <span className="text-danger">Please enter a valid longitude.</span>
        )}
        <br />
        <label htmlFor="opening hour" className="form-label">
          <b>Clinic Opening Hour</b>
        </label>
        <input
          type="number"
          id="opening hour"
          name="clinic_open"
          placeholder="Open At"
          className="form-control"
          value={clinicData.clinic_open}
          onChange={handleChange}
        />
        {!formInputsValidity.openHour && (
          <span className="text-danger">
            Please enter a valid opening hour.
          </span>
        )}
        <br />
        <label htmlFor="closing hour" className="form-label">
          <b>Clinic Closing Hour</b>
        </label>
        <input
          type="text"
          id="closing hour"
          name="clinic_close"
          placeholder="Close At"
          className="form-control"
          value={clinicData.clinic_close}
          onChange={handleChange}
        />
        {!formInputsValidity.closingHour && (
          <span className="text-danger">
            Please enter a valid closing hour.
          </span>
        )}
        <br />

        <div className="modal-footer">
          {notification && (
            <Notification
              status={notification.status}
              title={notification.status}
              message={notification.message}
            />
          )}
          <button className="btn btn-success">Update</button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
