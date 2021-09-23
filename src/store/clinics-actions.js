import React from "react";
import { clinicsActions } from "./clinics-slice";
import { detailsActions } from "./ui-clinic-details-slice";

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

export const sendClinicData = (clinic) => {
  return async (dispatch) => {

    dispatch(clinicsActions.uploadClinicImages(clinic));
    console.log("clinics-actions", clinic);

    const sendRequest = async () => {
      const response = await fetch(
        `https://project-1-fa1ee-default-rtdb.firebaseio.com/clinics/clinics/${clinic.id}/images.json`,
        {
          method: "PUT",
          body: JSON.stringify({ id: clinic.newImage, type: clinic.imageType }),
          headers: {
            "Content-Type": "application/json",
        },
        }
      );
      if (!response.ok) {
        throw new Error("Sending clinic data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        detailsActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      return <p>{error}</p>;
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error...",
      //     message: "Sending cart data failed!",
      //   })
      // );
    }
  };
};
