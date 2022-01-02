import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesActions } from "../../store/services/services-slice";
import { sendServiceData } from "../../store/services/services-actions";
import Modal from "../UI/Modal";
import UpdatePriceForm from "../labTests/UpdatePriceForm";

const ServicesTable = (props) => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const clinicName = useSelector((state) => state.services.clinicName);
  const [showUpdatePriceForm, setShowUpdateForm] = useState(false);
  const [updatedServiceIndex, setUpdatedServiceIndex] = useState(null);

  const showUpdatePriceHandler = (serviceId) => {
    setShowUpdateForm(true);
    console.log("service id", serviceId);
    const serviceIndex = services.clinicServices.findIndex(
      (serviceItem) => serviceItem.id === serviceId
    );
    console.log(
      "services [ service id]",
      services.clinicServices[serviceIndex]
    );
    setUpdatedServiceIndex(serviceIndex);
  };

  const hideUpdatePriceHandler = () => {
    setShowUpdateForm(false);
  };

  const updatePriceHandler = (service) => {
    dispatch(
      servicesActions.updateServicePrice({
        ...service,
        index: updatedServiceIndex,
      })
    );
    const timer = setTimeout(() => {
      hideUpdatePriceHandler();
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (services.changed && showUpdatePriceForm) {
      dispatch(
        sendServiceData(updatedServiceIndex, services.clinicServices[updatedServiceIndex])
      );
    }
  }, [dispatch, services]);

  return (
    <div className="card-body">
      <table
        className="table table-bordered table-responsive"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          <tr>
            <th className="col-1">Id</th>
            <th>Name</th>
            <th className="col-2">Price</th>
            <th>Action</th>
          </tr>
          {services.clinicServices.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm float-end"
                  onClick={(event) => showUpdatePriceHandler(item.id)}
                >
                  Update Price
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdatePriceForm && (
        <Modal
          onClose={hideUpdatePriceHandler}
          header="Update Price for Clinic Service
        "
        >
          <UpdatePriceForm
            test={services.clinicServices[updatedServiceIndex]}
            clinic={clinicName}
            onClose={hideUpdatePriceHandler}
            updatePriceHandler={updatePriceHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default ServicesTable;
