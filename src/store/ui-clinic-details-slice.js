import { createSlice } from "@reduxjs/toolkit";

const clinicDetailsSlice = createSlice({
    name: "details", 
    initialState: {
        detailsAreVisible: false,
        notifications: null
    },
    reducers: {
      toggle(state, action) {
        state.detailsAreVisible = true;
      },
      showNotification(state, action){
        state.notification = {
          state: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
        }
      }
    },
  });
  export const detailsActions = clinicDetailsSlice.actions;
  
  export default clinicDetailsSlice;