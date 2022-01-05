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
      state.totalQuantity = action.payload.fetchedData.clinic_services.length;
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
    addService(state, action) {
      state.changed = true;
      const newService = action.payload;
      newService.id = state.clinicServices.length + 1;
      newService.clinic_id = state.clinicId;
      //console.log("pushing new service slice", newService);
      state.clinicServices.push(newService);
      state.totalQuantity = state.clinicServices.length;
    },
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesSlice;
