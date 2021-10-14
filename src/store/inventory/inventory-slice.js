import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name:"inventory",
    initialState:{
        clinicMedicines:[],
        clinicId: 15,
        changed: false,
        sortingBy: false,
        totalQuantity: 0,
    },
    reducers:{
        showClinicMedicines(state, action){
            state.clinicMedicines = action.payload.fetchedData.medicines;
            state.clinicId = action.payload.fetchedData.clinic.id;
            //console.log("slice", state.clinicMedicines, state.clinicId);
            state.totalQuantity = action.payload.fetchedData.medicines.length;
        },
        setSorting(state, action){
            state.sortingBy = action.payload;
            //console.log(state.sortingBy)
        }
    }
})

export const inventoryActions = inventorySlice.actions;

export default inventorySlice;