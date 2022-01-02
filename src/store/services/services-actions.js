import React from "react";
import { servicesActions } from "../../store/services/services-slice";
import { detailsActions } from "../ui-clinic-details-slice";
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

export const sendServiceData = (index, service) => {
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
        `${URL}/services/${service.clinic_id}/clinic_services/${index}.json`,
        {
          method: "PUT",
          body: JSON.stringify(service),
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
