import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavigationItem = (props) => {
  return (
    <li className="p-2">
      <Link to={props.link}>
        <FontAwesomeIcon icon={props.icon} />
        {"  "}
        {props.title}
      </Link>
    </li>
  );
};

export default SideNavigationItem;
