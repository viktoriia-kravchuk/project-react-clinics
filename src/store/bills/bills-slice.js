import { createSlice } from "@reduxjs/toolkit";

const current = new Date();
const currentMonth = `${current.getMonth() + 1}`;
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    clinicBills: [],
    clinicId: 3,
    selectedDate: date,
    selectedMonth: currentMonth,
    changed: false,
  },
  reducers: {
    showClinicBills(state, actions) {
      state.clinicBills = actions.payload.bills;
      //console.log("slice", actions.payload.bills);
    },
  },
});

export const billsActions = billsSlice.actions;
export default billsSlice;
