import { createSlice } from "@reduxjs/toolkit";

const date = new Date('2021-01-01');

const currentMonth = date.getMonth();
const currentDate = date.toISOString().split("T")[0];

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    clinicBills: [],
    clinicId: 1,
    selectedDate: currentDate,
    selectedMonth: currentMonth,
    changed: false
    },

  reducers: {
    showClinicBills(state, actions) {
      const bills = actions.payload.bills;
      state.clinicBills = bills;
      console.log("slice", bills);
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
