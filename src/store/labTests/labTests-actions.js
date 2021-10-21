import React from "react";
import { labTestsActions } from "./labTests-slice";
// import { detailsActions } from "../ui-clinic-details-slice";
import { URL } from "../../App";

export const fetchClinicTestsData = (clinicId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/labTests/${clinicId}.json`);
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const clinicTestsData = await fetchData();
      console.log("action", clinicTestsData);
      dispatch(
        labTestsActions.showClinicLabTests({
          fetchedData: clinicTestsData,
        })
      );
    } catch (error) {
      return <p>{error}</p>;
    }
  };
};
