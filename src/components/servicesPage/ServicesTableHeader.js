import React, { useState, useEffect } from "react";
import SelectClinicForm from "./SelectClinicForm";
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../store/services/services-slice";
import { sendServiceData } from "../../store/services/services-actions";
import Modal from "../UI/Modal";
import AddServiceForm from "./AddServiceForm";

const ServicesTableHeader = (props) => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const clinicName = services.clinicName;
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);

  const showAddServiceFormHandler = () => {
    setShowAddServiceForm(true);
  };

  const hideAddServiceFormHandler = () => {
    setShowAddServiceForm(false);
  };

  const addServiceHandler = (service) => {
    dispatch(servicesActions.addService(service));

    const timer = setTimeout(() => {
      hideAddServiceFormHandler();
    }, 2500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (services.changed) {
      dispatch(
        sendServiceData(
          services.totalQuantity - 1,
          services.clinicServices[services.totalQuantity - 1]
        )
      );
    }
  }, [dispatch, services]);

  return (
    <div className="card-header">
      <div className="row" style={{ padding: "10px" }}>
        <SelectClinicForm />
        <div className="col-8">
          {" "}
          <button
            className="btn btn-primary btn-sm float-end"
            onClick={(event) => showAddServiceFormHandler()}
          >
            Add Service
          </button>
        </div>
      </div>
      {showAddServiceForm && (
        <Modal
          onClose={hideAddServiceFormHandler}
          header="Add Clinic Service
      "
        >
          <AddServiceForm
            clinicName={clinicName}
            onClose={hideAddServiceFormHandler}
            onSubmit={addServiceHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default ServicesTableHeader;
