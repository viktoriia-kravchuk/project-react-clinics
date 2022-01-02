import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    clinicServices: [],
    clinicId: 15,
    clinicName: "Ranwal, Rajasthan",
    changed: false,
    totalQuantity: 0,
  },
  reducers: {
    showClinicServices(state, action) {
      state.clinicServices = action.payload.fetchedData.clinic_services;
      state.clinicId = action.payload.clinicId;
    },
    updateServicePrice(state, action) {
      state.changed = true;
      const updatedService = { ...action.payload };
      delete updatedService.index;
      state.clinicServices[action.payload.index] = updatedService;
    },
    setName(state, action) {
      //console.log("action", action.payload)
      state.clinicName = action.payload;
    },
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesSlice;
