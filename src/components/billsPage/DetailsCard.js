import React, { useState } from "react";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

const DetailsCard = (props) => {
  const [tableIsVisible, setTableIsVisible] = useState(false);
  const handleTableVisibility = () => {
    setTableIsVisible(!tableIsVisible);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card" style={{ margin: "2%" }}>
          <div className="card-header" onClick={handleTableVisibility}>
            <div className="row">
              <div className="col-md-6">
                {" "}
                <span>{`Medicine Invoices: ₹ ${props.total}`}</span>
              </div>
              <div className="col-md-6">
                {tableIsVisible ? (
                  <FontAwesomeIcon icon={faArrowDown} className="float-end" />
                ) : (
                  <FontAwesomeIcon icon={faArrowRight} className="float-end" />
                )}
              </div>
            </div>
          </div>
          {tableIsVisible ? (
            <div className="card-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dose</th>
                    <th>Dose MRP</th>
                    <th>Invoice Date</th>
                    <th>Treatment Date</th>
                    <th>&#8377; Amount</th>
                  </tr>
                  {props.invoices.map((invoice) => (
                    <tr>
                      <td>{invoice.medicine_name}</td>
                      <td>{invoice.doses}</td>
                      <td>&#8377; {invoice.dose_mrp}</td>
                      <td>
                        {
                          <Moment format="MMM D, YYYY h:mm:ss A" unix>
                            {invoice.invoice_time}
                          </Moment>
                        }
                      </td>
                      <td>
                        {
                          <Moment format="D MMM YYYY " unix>
                            {invoice.invoice_time}
                          </Moment>
                        }
                      </td>
                      <td>&#8377; {invoice.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
