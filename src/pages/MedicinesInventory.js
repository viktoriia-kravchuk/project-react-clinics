import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import SideNavigation from "../components/UI/SideNavigation";
import TableHeader from "../components/inventoryPage/TableHeader";
import TableBody from "../components/inventoryPage/TableBody";

let isInitial = true;

const MedicinesInventory = (props) => {
  const inventory = useSelector((state) => state.inventory);
  const sortingStatus = inventory.sortingBy;
  //console.log("inventory ", inventory);
  let notSortedMedicines = [...inventory.clinicMedicines];

  const sortedMedicines =
    sortingStatus === "DESC"
      ? notSortedMedicines.sort((a, b) => a.dose_per_unit - b.dose_per_unit)
      : sortingStatus === "ASC"
      ? notSortedMedicines.sort((a, b) => b.dose_per_unit - a.dose_per_unit)
      : notSortedMedicines;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinicsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // if (inventory.updatedId) {
    //   console.log(inventory.updatedId)
    //   dispatch(fetchClinicMedicinesData(inventory.clinicId));
    // }
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <div className="card shadow border-left-primary">
            <TableHeader/>
            <TableBody medicines={sortedMedicines} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinesInventory;
