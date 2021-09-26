import { createSlice } from "@reduxjs/toolkit";

const clinicsSlice = createSlice({
  name: "clinics",
  initialState: {
    clinics: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    showClinics(state, action) {
      state.clinics = action.payload.clinics;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addClinic(state, action) {},

    uploadClinicImages(state, action) {
      const { arrayIndex, newImage, imageType } = action.payload;
      state.changed = true;
      if (!state.clinics[arrayIndex].images) {
        state.clinics[arrayIndex]["images"] = [];
      }
      state = {
        ...state,
        clinics: {
          ...state.clinics,
          [arrayIndex]: {
            ...state.clinics[arrayIndex],
            images: state.clinics[arrayIndex].images.push({
              id: newImage,
              type: imageType,
            }),
          },
        },
      };
    },
    updateClinicInfo(state, action) {},
  },
});

export const clinicsActions = clinicsSlice.actions;

export default clinicsSlice;
