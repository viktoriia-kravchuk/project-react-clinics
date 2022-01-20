import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardLayout from "./CardLayout";

const PageSummary = (props) => {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.clinicBills);
  const monthRevenue = useSelector(state=>state.bills.monthRevenue);


  return (
    <Fragment>
      <div className="row">
        <CardLayout
          class="card shadow border-left-primary"
          text={`Revenue Generated in ${props.selectedMonth}`}
          value={`₹ ${monthRevenue}`}
        />
        <CardLayout
          class="card shadow border-left-success"
          text={"Total Bill Generated"}
          on
          value={bills.length}
        />
      </div>
      <div className="row">
        <CardLayout
          class="card shadow border-left-primary"
          text={`Revenue on ${props.selectedDay} ${props.selectedMonth}`}
        />
        <CardLayout
          class="card shadow border-left-success"
          text={"Total Bill Generated"}
        />
      </div>
    </Fragment>
  );
};

export default PageSummary;
