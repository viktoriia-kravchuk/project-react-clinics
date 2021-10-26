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
    updateLabTest(state, action){
      state.changed = true;
      const updatedTest = {...action.payload};
      delete updatedTest.arrayIndex;
      state.clinicLabTests.lab_tests[action.payload.arrayIndex] = updatedTest;
    }
  },
});

export const labTestsActions = labTestSlice.actions;
export default labTestSlice;
