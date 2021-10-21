import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { agentsActions } from "../../store/agents-slice";

const PanelListItem = (props) => {
  const selectedItem = useSelector((state) => state.agents.filterStatus);
  const activeClass =
    selectedItem === props.id ? "nav-link active" : "nav-link";

  const dispatch = useDispatch();

  const filterStatusHandler = () => {
    dispatch(agentsActions.setFilterStatus(props.id));
  };

  return (
    <li id={props.id} role="presentation" className="nav-item" key={props.id}>
      <a className={activeClass} onClick={filterStatusHandler}>
        {props.option}
      </a>
    </li>
  );
};

export default PanelListItem;
