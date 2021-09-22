import React from "react";
import { clinicsActions } from "./clinics-slice";

export const fetchClinicsData = (clinics) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://project-1-fa1ee-default-rtdb.firebaseio.com/clinics.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      //console.log(data);
      return data;
    };
    try {
      const clinicsData = await fetchData();
      dispatch(
        clinicsActions.showClinics({
          clinics: clinicsData.clinics,
          totalQuantity: clinicsData.totalQuantity,
        })
      );
    } catch (error) {
      return <p>{error}</p>;
    }
  };
};
