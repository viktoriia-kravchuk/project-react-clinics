import React from "react";
import StatusCard from "./StatusCard";
import ProfileDetails from "./ProfileDetails";

const AgentInfoCard = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: "15px" }}>
      <div className="card shadow" style={{ height: "100%", padding:"10px" }}>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <img
              style={{ margin: "20px" }}
              height="80px"
              width="80px"
              src={props.agent.image}
              alt="Not Found"
            />{" "}
            <p style={{ marginLeft: "20px" }}>
              Status : <StatusCard status={props.agent.status} />
            </p>
          </div>
          <div className="col-sm-6 col-md-8">
              <ProfileDetails agent={props.agent}/>
              <button className="btn btn-primary">Assign Clinic</button>{" "}
              <button className="btn btn-danger">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfoCard;
