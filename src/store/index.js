import { configureStore } from "@reduxjs/toolkit";
import clinicsSlice from "./clinics-slice";
import clinicDetailsSlice from "./ui-clinic-details-slice";

const store = configureStore({
  reducer: {
    clinics: clinicsSlice.reducer,
    clinicDetails: clinicDetailsSlice.reducer,
    
  },
});

export default store;
