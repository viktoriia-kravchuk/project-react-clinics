import React from "react";
import { agentsActions } from "./agents-slice";

export const fetchAgentsData = (agents) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
              "https://project-1-fa1ee-default-rtdb.firebaseio.com/clinics/agents.json"
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