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
        uploadClinicImages(state, action){
            console.log("slice", action.payload);
            const {id, newImage, imageType} = action.payload;
            const clinicId = state.clinics.findIndex((item) => item.id === id);  
            if (state.clinics[clinicId].images) {
                state.clinics[clinicId].images.push({"id": newImage, "type": imageType })
            } else{
                state.clinics[clinicId]["images"] = JSON.stringify({"id": newImage, "type": imageType });
            }

        },
        updateClinicInfo(state, action){

        }

    }
});

export const clinicsActions = clinicsSlice.actions;

export default clinicsSlice;