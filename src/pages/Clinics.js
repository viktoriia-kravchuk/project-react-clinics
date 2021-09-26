import React, { useEffect} from "react";
import SideNavigation from "../components/UI/SideNavigation";
import AllClinicsTable from "../components/clinicsPage/AllClinicsTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import {sendClinicData} from "../store/clinics-actions";

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
    if (clinics.changed){
      dispatch(sendClinicData(clinics.clinics));
    }
  }, [clinics, dispatch]);


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
                    <button className="btn btn-primary float-end">
                      Add New Clinic
                    </button>
                    </div>
              </div>
            </div>
              <AllClinicsTable allClinics={clinics.clinics}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
