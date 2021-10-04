import { createSlice } from "@reduxjs/toolkit";

const clinicDetailsSlice = createSlice({
  name: "details",
  initialState: {
    detailsAreVisible: false,
    notifications: null,
    clinicId: null,
  },
  reducers: {
    toggle(state, action) {
      state.detailsAreVisible = true;
      state.clinicId = action.payload;
    },
    showNotification(state, action) {
      state.notifications = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotifications(state, action) {
      state.notifications = null;
    },
  },
});
export const detailsActions = clinicDetailsSlice.actions;

export default clinicDetailsSlice;
