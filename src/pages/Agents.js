import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAgentsData, sendAgentsData } from "../store/agents-actions";
import { fetchClinicsData } from "../store/clinics-actions";
import SideNavigation from "../components/UI/SideNavigation";
import PanelList from "../components/agentsPage/PanelList";
import AgentsList from "../components/agentsPage/AgentsList";

let isInitial = true;

const Agents = (props) => {
  const agents = useSelector((state) => state.agents);
  const selectedFilter = agents.filterStatus;

  // console.log(agents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgentsData());
    dispatch(fetchClinicsData());
  }, [dispatch]);
 
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (agents.changed) {
      dispatch(sendAgentsData(agents.agents));
    }
  }, [agents, dispatch]);


  const filteredAgents =
    selectedFilter !== 0
      ? agents.agents.filter((agent) => {
          return agent.status === selectedFilter;
        })
      : agents.agents;

  return (
    <div className="row">
      <div className="col-md-12">
        <SideNavigation />
        <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
          <h4 style={{ marginLeft: "1em" }}>Agents</h4>
          <br />
          <PanelList />
          <AgentsList agents={filteredAgents}/>
        </div>
      </div>
    </div>
  );
};

export default Agents;
