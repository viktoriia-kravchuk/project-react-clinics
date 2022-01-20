import { createSlice } from "@reduxjs/toolkit";
import Moment from "react-moment";
Moment.globalFormat = "MMM D, YYYY h:mm:ss A";

const date = new Date();

const currentMonth = date.getMonth();
const currentDate = date.toISOString().split("T")[0];

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    clinicBills: [],
    clinicId: 3,
    selectedDate: currentDate,
    selectedMonth: currentMonth,
    changed: false,
    monthRevenue: 0,
    total:0,
    dayRevenue: 0,
    discount:0
    },
  reducers: {
    showClinicBills(state, actions) {
      const bills = actions.payload.bills;
      state.clinicBills = bills;
      console.log("slice", bills);

      for(var i =0; i< bills.length; i++){
        const bill = bills[i].bill;
        state.monthRevenue += bill.paid;
        state.total+=bill.amount;
        state.discount+= bill.discount;
      }

    },
    setSelectedDate(state, actions) {
      console.log(
        "month got changed to: ",
        new Date(actions.payload).getMonth()
      );
      console.log("date got changed to: ", actions.payload);
      state.selectedMonth = new Date(actions.payload).getMonth();
      state.selectedDate = actions.payload;
    },
  },
});

export const billsActions = billsSlice.actions;
export default billsSlice;
