import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clinicsActions } from "../store/clinics-slice";

const AllClinicsTableItem = (props) => {
  const { id, name, address, time, images } = props.clinicItem;

  const dispatch = useDispatch();

  const showDetailsHandler = () => {
    props.showDetails({ name, images });
  };

  const updateClinicInfoHandler = () => {
    dispatch(clinicsActions.updateClinicInfo(id));
  };

  return (
    <tr className="ng-scope">
      <td className="ng-binding">{id}</td>
      <td className="ng-binding">{name}</td>
      <td className="ng-binding">{address}</td>
      <td className="ng-binding">{time}</td>
      <td>
        <button onClick={showDetailsHandler} className="btn btn-primary">
          Details
        </button>{" "}
        <button onClick={updateClinicInfoHandler} className="btn btn-success">
          Update
        </button>
      </td>
    </tr>
  );
};

export default AllClinicsTableItem;
