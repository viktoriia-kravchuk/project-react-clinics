import React from "react";
import { useDispatch} from "react-redux";
import { clinicsActions } from "../../store/clinics-slice";
import { detailsActions } from "../../store/ui-clinic-details-slice";

const AllClinicsTableItem = (props) => {
  
  const { id, name, address, time} = props.clinicItem;

  const dispatch = useDispatch();

  const showDetailsHandler = () => {
    dispatch(detailsActions.toggle(id));
  };

  const updateClinicInfoHandler = () => {
    dispatch(clinicsActions.updateClinicInfo(id));
  };

  return (
    <tr className="ng-scope" key={id}>
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
