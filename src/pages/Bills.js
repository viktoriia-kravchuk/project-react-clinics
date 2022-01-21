import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import { fetchBillsData } from "../store/bills/bills-actions";
import SideNavigation from "../components/UI/SideNavigation";
import PageHeader from "../components/billsPage/PageHeader";
import PageSummary from "../components/billsPage/PageSummary";

let isInitial = true;
const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Bills = () => {
  const dispatch = useDispatch();
  const chosenMonth = useSelector((state) => state.bills.selectedMonth);
  const chosenDay = useSelector((state) =>
    new Date(state.bills.selectedDate).getDate()
  );
  const monthBills = useSelector((state) => state.bills.clinicBills);

  const filterClinicDayBills = (data) => {
    return data.filter(
      (item) => new Date(item.bill.created * 1000).getDate() === chosenDay
    );
  };



  useEffect(() => {
    dispatch(fetchClinicsData());

    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBillsData(chosenMonth));
  }, [dispatch, chosenMonth]);

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <PageHeader />
          <PageSummary
            selectedMonth={monthsArray[chosenMonth]}
            selectedDay={chosenDay}
            filterDayBills={filterClinicDayBills}
          />
        </div>
      </div>
    </div>
  );
};

export default Bills;
