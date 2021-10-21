import React from "react";

const TestsBody = (props) => {
  return (
    <div className="card">
      <table className="table table-bordered table-responsive">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Done By</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {props.tests.map((test) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.code}</td>
              <td>{test.done_by}</td>
              <td>{test.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestsBody;
