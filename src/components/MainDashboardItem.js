import React from "react";
import { Link } from "react-router-dom";

const MainDashboardItem = (props) => {
  return (
    <div className="col-sm-4 col-md-3" style={{ paddingTop:"6px" }}>
      <Link to={props.link} className="card shadow text-decoration-none">
        <div className="card-body text-center">
          <img src={props.image} alt={props.title} />
          <h4 className="text-primary text-decoration-none">{props.title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default MainDashboardItem;
