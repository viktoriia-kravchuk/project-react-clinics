import React from "react";
import { Link } from "react-router-dom";


const SideNavigationItem = (props) => {
  return (
    <li>
      <Link to={props.link}>
        <p>{props.title}</p>
      </Link>
    </li>
  );
};

export default SideNavigationItem;
