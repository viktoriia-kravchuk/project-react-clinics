import React from "react";
import { billsActions} from "./bills-slice";
//import { detailsActions } from "../ui-clinic-details-slice";
import { URL } from "../../App";

export const fetchBillsData = (month) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
              `${URL}/bills/${month}.json`
            );
            if (!response.ok) {
              throw new Error("Could not fetch data!");
            }
            const data = await response.json();
            return data;
          };
          try {
            const billsData = await fetchData();
            dispatch(
              billsActions.showClinicBills({
                bills: billsData,
              })
            );
          } catch (error) {
            return <p>{error}</p>;
          }
    }
}