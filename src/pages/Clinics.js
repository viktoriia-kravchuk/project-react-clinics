import React, { useEffect, useState } from "react";
import SideNavigation from "../components/UI/SideNavigation";
import AllClinicsTable from "../components/AllClinicsTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import ClinicDetailsCard from "../components/ClinicDetailsCard";
import { detailsActions } from "../store/ui-clinic-details-slice";
import { clinicsActions } from "../store/clinics-slice";

const Clinics = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClinicsData());
  }, [dispatch]);

  const clinics = useSelector((state) => state.clinics.clinics);
  const detailsAreVisible = useSelector(
    (state) => state.clinicDetails.detailsAreVisible
  );

  const [clinicDetails, setClinic] = useState(null);


  const showDetailsHandler = (clinic) => {
    dispatch(detailsActions.toggle(clinic.id));
    setClinic(clinic);
    // if(clinic.images){
    //   console.log("Images")
    // }else{
    //   console.log("No images")
    // }
  }

  const updateClinicInfoHandler = (id) => {
    dispatch(clinicsActions.updateClinicInfo(id));
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-3">
                    <h4 className="text-primary ng-binding">
                      Clinics: {clinics.length}
                    </h4>
                  </div>
                  <div className="col-md-9">
                    <button className="btn btn-primary pull-right">
                      Add New Clinic
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <AllClinicsTable allClinics={clinics} showDetails = {showDetailsHandler} />
              {detailsAreVisible && <ClinicDetailsCard clinic={clinicDetails}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
