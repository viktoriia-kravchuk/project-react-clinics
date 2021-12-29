import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
    name:"services",
    initialState:{
        clinicServices:[],
        clinicId: 15,
        changed: false,
        totalQuantity: 0,
    },
    reducers:{
        showClinicServices(state, action){
            state.clinicServices= action.payload.fetchedData.clinic_services;
            state.clinicId = action.payload.clinicId;
            //console.log("slice", state.clinicMedicines, state.clinicId);
            //state.totalQuantity = action.payload.fetchedData.medicines.length;
        },

    }
})

export const servicesActions = servicesSlice.actions;

export default servicesSlice;