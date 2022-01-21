import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CardLayout from "./CardLayout";



const PageSummary = (props) => {
  //const dispatch = useDispatch();
  const monthBills = useSelector((state) => state.bills.clinicBills);
  const clinicBillsStats = getIncomeStats(monthBills);
  const dayBills = props.filterDayBills(monthBills);
  const dayBillsStats = getIncomeStats(dayBills);

  console.log(dayBills)

  return (
    <Fragment>
      <div className="row">
        <CardLayout
          class="card shadow border-left-primary"
          text={`Revenue Generated in ${props.selectedMonth}`}
          value={`₹ ${clinicBillsStats.paid + clinicBillsStats.due}`}
        />
        <CardLayout
          class="card shadow border-left-success"
          text={"Total Bill Generated"}
          on
          value={monthBills.length}
        />
      </div>
      <div className="row">
        <CardLayout
          class="card shadow border-left-primary"
          text={`Revenue on ${props.selectedDay} ${props.selectedMonth}`}
          value={`₹ ${dayBillsStats.paid + dayBillsStats.due}`}
        />
        <CardLayout
          class="card shadow border-left-success"
          text={"Total Bill Generated"}
          value = {dayBills.length}
        />
      </div>
    </Fragment>
  );
};

export default PageSummary;

const getIncomeStats = (data) => {
  const clinicStats = {
    total: 0,
    discount: 0,
    medicines: 0,
    paid: 0,
    due: 0,
  };

  for (var i = 0; i < data.length; i++) {
    const bill = data[i].bill;
    clinicStats.total += bill.amount;
    clinicStats.discount += bill.discount;
    clinicStats.medicines += getListSum(bill.medicine_invoices);
    if (bill.status === 2) {
      clinicStats.paid += bill.paid;
    } else if (bill.status === 3) {
      clinicStats.paid += bill.paid;
      clinicStats.due += bill.amount - bill.discount - bill.paid;
    } else {
      clinicStats.due += bill.amount - bill.discount;
    }
  }

  function getListSum(props) {
    if (props !== undefined) {
      return props.reduce((sum, x) => sum + x.amount, 0);
    } else {
      return 0;
    }
  }

  return clinicStats;
};
