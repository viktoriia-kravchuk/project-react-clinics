import { createSlice } from "@reduxjs/toolkit"

const clinicsSlice = createSlice({
    name: "clinics",
    initialState: {
        clinics: [],
        totalQuantity: 0,
        changed: false
    },
    reducers:{
        showClinics(state, action){
            state.clinics = action.payload.clinics;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addClinic(state,action){

        },
        showClinicDetails(state, action){
            const id = action.payload;

        },
        updateClinicInfo(state, action){

        }

    }
});

export const clinicsActions = clinicsSlice.actions;

export default clinicsSlice;