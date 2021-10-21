import React from "react";
import { clinicsActions } from "./clinics-slice";
import { detailsActions } from "./ui-clinic-details-slice";
import { URL } from "../App";

export const fetchClinicsData = (clinics) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/clinics.json`
      );
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const clinicsData = await fetchData();
      console.log(clinicsData);
      dispatch(
        clinicsActions.showClinics({
          clinics: clinicsData,
          //totalQuantity: clinicsData.totalQuantity
        })
      );
    } catch (error) {
      return <p>{error}</p>;
    }
  };
};

export const sendClinicData = (clinics) => {
  //console.log(clinics);
  return async (dispatch) => {
    dispatch(
      detailsActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending clinic data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `${URL}/clinics.json`,
        {
          method: "PUT",
          body: JSON.stringify(clinics),
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
          message: "Sent clinic data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        detailsActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending clinic data failed!",
        })
      );
    }
    const timer = setTimeout(() => {
      dispatch(detailsActions.hideNotifications());
    }, 1000);
    return () => clearTimeout(timer);
  };
};
