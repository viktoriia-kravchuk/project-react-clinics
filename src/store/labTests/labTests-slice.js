import { createSlice } from "@reduxjs/toolkit";

const labTestSlice = createSlice({
  name: "labTests",
  initialState: {
    clinicLabTests: [],
    clinicId: 1,
    changed: false,
    isLoaded: false,
  },
  reducers: {
    showClinicLabTests(state, action) {
      state.clinicLabTests = action.payload.fetchedData;
      state.clinicId = action.payload.fetchedData.clinic.id;
      state.isLoaded = true;
    },
  },
});

export const labTestsActions = labTestSlice.actions;
export default labTestSlice;
