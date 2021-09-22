import React from "react";
import AllClinicsTableItem from "./AllClinicsTableItem";

const AllClinicsTable = (props) => {
  const allClinics = props.allClinics;

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
      clinicItem={{
        id: clinic.id,
        name: clinic.name,
        address: clinic.address,
        time: clinic.time,
        images: clinic.images,
      }}
      showDetails={props.showDetails}
    />
  ));

  return (
    <table className="table table-bordered">
      <tbody>
        {clinicsHeader}
        {clinicsTable}
      </tbody>
    </table>
  );
};
export default AllClinicsTable;
