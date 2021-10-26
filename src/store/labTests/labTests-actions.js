import React from "react";
import { labTestsActions } from "./labTests-slice";
import { detailsActions } from "../ui-clinic-details-slice";
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

export const sendClinicTestData = (clinicId, test, index) => {
  return async (dispatch) => {
    dispatch(
      detailsActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending clinic test data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `${URL}/labTests/${clinicId}/lab_tests/${index}.json`,
        {
          method: "PUT",
          body: JSON.stringify(test),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending test data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        detailsActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent clinic test data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        detailsActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending clinic test data failed!",
        })
      );
    }
    const timer = setTimeout(() => {
      dispatch(detailsActions.hideNotifications());
    }, 1000);
    return () => clearTimeout(timer);
  };
};
