import React, { useEffect, useState } from "react";
import SideNavigation from "../components/UI/SideNavigation";
import AllClinicsTable from "../components/clinicsPage/AllClinicsTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import { sendClinicData } from "../store/clinics-actions";
import Modal from "../components/UI/Modal";
import UpdateForm from "../components/clinicsPage/UpdateForm";
import { clinicsActions } from "../store/clinics-slice";

let isInitial = true;

const Clinics = (props) => {
  const clinics = useSelector((state) => state.clinics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinicsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (clinics.changed) {
      dispatch(sendClinicData(clinics.clinics));
    }
  }, [clinics, dispatch]);

  const [modalIsShown, setModalIsShown] = useState(false);
  const emptyClinic = {
    name: "",
    address: "",
    lat: "",
    lng: "",
    clinic_open: "",
    clinic_close: "",
  };

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const updateClinicInfoHandler = (updatedClinic) => {
    dispatch(clinicsActions.updateClinicInfo(updatedClinic));
  };

  const addClinicInfoHandler = (newClinic) => {
    dispatch(clinicsActions.addClinic(newClinic));
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-3">
                  <h4 className="text-primary ng-binding">
                    Clinics: {clinics.clinics.length}
                  </h4>
                </div>
                <div className="col-md-9">
                  <button
                    className="btn btn-primary float-end"
                    onClick={showModalHandler}
                  >
                    Add New Clinic
                  </button>
                  {modalIsShown && (
                    <Modal onClose={hideModalHandler} header="Add New Clinic">
                      <UpdateForm
                        currentValue={emptyClinic}
                        onClose={hideModalHandler}
                        updateHandler={addClinicInfoHandler}
                      />
                    </Modal>
                  )}
                </div>
              </div>
            </div>
            <AllClinicsTable
              allClinics={clinics.clinics}
              updateClinic={updateClinicInfoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
