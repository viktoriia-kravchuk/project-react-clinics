import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import SideNavigation from "../components/UI/SideNavigation";
import ClinicsTable from "../components/labTests/ClinicsTable";
import TestsTable from "../components/labTests/TestsTable";

let isInitial = true;

const LabTests = (props) => {
  const dispatch = useDispatch();
  const labTestsDataFetched = useSelector(state => state.labTests.isLoaded);

  useEffect(() => {
    dispatch(fetchClinicsData());
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <div className="card">
            <div className="card-header">
              <h4>Clinic Lab Tests</h4>
            </div>
            <ClinicsTable />
            {labTestsDataFetched && <TestsTable/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTests;
