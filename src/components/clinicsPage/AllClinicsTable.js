import React from "react";
import AllClinicsTableItem from "./AllClinicsTableItem";
import ClinicDetailsCard from "./ClinicDetailsCard";
import { useSelector } from "react-redux";

const AllClinicsTable = (props) => {

  const allClinics = props.allClinics;

  const detailsAreVisible = useSelector(
    (state) => state.clinicDetails.detailsAreVisible
  );
  const clinicId = useSelector((state) => state.clinicDetails.clinicId);

  const clinic = allClinics.find((clinic) => clinic.id === clinicId);

  const clinicsHeader = (
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      <th className="col-2">Working Hours</th>
      <th className="col-2">Action</th>
    </tr>
  );

  const clinicsTable = allClinics.map((clinic) => (
    <AllClinicsTableItem
      key={clinic.id}
      updateClinic={props.updateClinic}
      clinicItem={{
        id: clinic.id,
        name: clinic.name,
        address: clinic.address,
        time: clinic.time,
        images: clinic.images,
        lat: clinic.lat,
        lng: clinic.lng,
        clinic_close: clinic.clinic_close,
        clinic_open: clinic.clinic_open
      }}
    />
  ));

  return (
    <div className="card-body">
      <table className="table table-bordered">
        <tbody>
          {clinicsHeader}
          {clinicsTable}
        </tbody>
      </table>
      {detailsAreVisible && <ClinicDetailsCard clinic={clinic} />}
    </div>
  );
};
export default AllClinicsTable;
