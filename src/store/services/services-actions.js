import React from "react";
import { servicesActions} from "../../store/services/services-slice";
// import { detailsActions } from "../ui-clinic-details-slice";
import { URL } from "../../App";

export const fetchClinicServicesData = (clinicId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/services/${clinicId}.json`);
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const clinicServicesData = await fetchData();
      console.log("action", clinicServicesData);
      dispatch(
        servicesActions.showClinicServices({
          fetchedData: clinicServicesData,
          clinicId,
          //totalQuantity: clinicsData.totalQuantity
        })
      );
    } catch (error) {
      return <p>{error}</p>;
    }
  };
};