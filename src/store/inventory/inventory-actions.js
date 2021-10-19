import React from "react";
import { inventoryActions } from "./inventory-slice";
// import { detailsActions } from "../ui-clinic-details-slice";

export const fetchClinicMedicinesData = (clinicId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://project-1-fa1ee-default-rtdb.firebaseio.com/clinics/inventory/${clinicId}.json`
      );
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const clinicMedicinesData = await fetchData();
      console.log("action", clinicMedicinesData);
      dispatch(
        inventoryActions.showClinicMedicines({
          fetchedData: clinicMedicinesData,
          //totalQuantity: clinicsData.totalQuantity
        })
      );
    } catch (error) {
      return <p>{error}</p>;
    }
  };
};
