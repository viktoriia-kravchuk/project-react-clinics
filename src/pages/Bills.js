import React, { useEffect } from "react";
import SideNavigation from "../components/UI/SideNavigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import PageHeader from "../components/billsPage/PageHeader";
import { fetchBillsData } from "../store/bills/bills-actions";
let isInitial = true;

const Bills = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinicsData());
    dispatch(fetchBillsData());
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
          <PageHeader />
        </div>
      </div>
    </div>
  );
};

export default Bills;
