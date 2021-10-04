import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { detailsActions } from "../../store/ui-clinic-details-slice";
import Modal from "../UI/Modal";
import UpdateForm from "./UpdateForm";

const AllClinicsTableItem = (props) => {
  const { id, name, address, time } = props.clinicItem;

  const dispatch = useDispatch();

  const showDetailsHandler = () => {
    dispatch(detailsActions.toggle(id));
  };

  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
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
        <button onClick={showModalHandler} className="btn btn-success">
          Update
        </button>
      </td>
      {modalIsShown && (
        <Modal onClose={hideModalHandler} header="Add Update Clinic">
          <UpdateForm
            currentValue={props.clinicItem}
            onClose={hideModalHandler}
            updateHandler = {props.updateClinic}
          />
        </Modal>
      )}
    </tr>
  );
};

export default AllClinicsTableItem;
