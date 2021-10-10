import React, { Fragment } from "react";
import {
  faEnvelope,
  faPhone,
  faClinicMedical,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Moment from "react-moment";
Moment.globalFormat = "MMM D, YYYY h:mm:ss A";

const ProfileDetails = (props) => {
  const agent = props.agent;
  const date = <Moment unix>{agent.created}</Moment>;

  return (
    <Fragment>
      <h5>{agent.name}</h5>
      <ul className="list-unstyled ">
        <li className="p-2">
          <FontAwesomeIcon icon={faEnvelope} /> {agent.email}
        </li>
        <li className="p-2">
          <FontAwesomeIcon icon={faPhone} /> {agent.mobile}
        </li>
        <li className="p-2">
          <FontAwesomeIcon icon={faClinicMedical} /> {agent.clinic_name}
        </li>
        <li className="p-2">
          <FontAwesomeIcon icon={faCalendar} /> {date}
        </li>
      </ul>
    </Fragment>
  );
};

export default ProfileDetails;
