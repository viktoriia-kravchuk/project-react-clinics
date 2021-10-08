import { configureStore } from "@reduxjs/toolkit";
import clinicsSlice from "./clinics-slice";
import clinicDetailsSlice from "./ui-clinic-details-slice";
import agentsSlice from "./agents-slice";

const store = configureStore({
  reducer: {
    clinics: clinicsSlice.reducer,
    clinicDetails: clinicDetailsSlice.reducer,
    agents: agentsSlice.reducer,
  },
});

export default store;
