import React from "react";
import { agentsActions } from "./agents-slice";
import { detailsActions } from "./ui-clinic-details-slice";
import { URL } from "../App";

export const fetchAgentsData = (agents) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
              `${URL}/agents.json`
            );
            if (!response.ok) {
              throw new Error("Could not fetch data!");
            }
            const data = await response.json();
            return data;
          };
          try {
            const agentsData = await fetchData();
            console.log(agentsData);
            dispatch(
              agentsActions.showAgents({
                agents: agentsData,
              })
            );
          } catch (error) {
            return <p>{error}</p>;
          }
    }
}


export const sendAgentsData = (agents) => {

  return async (dispatch) => {
    dispatch(
      detailsActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending agent data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `${URL}/agents.json`,
        {
          method: "PUT",
          body: JSON.stringify(agents),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending agent data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        detailsActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent agent data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        detailsActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending agent data failed!",
        })
      );
    }
    const timer = setTimeout(() => {
      dispatch(detailsActions.hideNotifications());
    }, 1000);
    return () => clearTimeout(timer);
  };
};
