import React from "react";



const ServicesTable = (props) => {

    const clinicServices = props.clinicServices;

    return (
        <div className="card-body">
          <table
            className="table table-bordered table-responsive"
            style={{ tableLayout: "fixed" }}
          >
            <tbody>
              <tr>
                <th className="col-1">Id</th>
                <th>Name</th>
                <th className="col-2">Price</th>
                <th>Action</th>
              </tr>
              {clinicServices.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td><button className="btn btn-primary btn-sm float-end">Update Price</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ServicesTable;