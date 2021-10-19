import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicsData } from "../store/clinics-actions";
import SideNavigation from "../components/UI/SideNavigation";
import TableHeader from "../components/inventoryPage/TableHeader";
import TableBody from "../components/inventoryPage/TableBody";

let isInitial = true;

const MedicinesInventory = (props) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const sortingStatus = inventory.sortingBy;
  const [searchInput, setSearchInput] = useState("");
  let notSortedMedicines = [...inventory.clinicMedicines].sort((a, b) => {
    return b.id - a.id;
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  let searchedMedicines = notSortedMedicines.filter((medicine) => {
    if (searchInput !== null) {
      return medicine.salt
        .toString()
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    }
    return medicine;
  });

  if (sortingStatus === "DESC") {
    searchedMedicines.sort((a, b) => {
      return a.dose_per_unit - b.dose_per_unit;
    });
  } else if (sortingStatus === "ASC") {
    searchedMedicines.sort((a, b) => {
      return b.dose_per_unit - a.dose_per_unit;
    });
  }

  // console.log(sortingStatus, searchedMedicines);

  useEffect(() => {
    dispatch(fetchClinicsData());
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <div className="card shadow border-left-primary">
            <TableHeader handleInputChange={handleInputChange} />
            <TableBody medicines={searchedMedicines} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinesInventory;
