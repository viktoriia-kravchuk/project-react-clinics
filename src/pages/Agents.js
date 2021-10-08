import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAgentsData } from "../store/agents-actions";
import SideNavigation from "../components/UI/SideNavigation";
import PanelList from "../components/agentsPage/PanelList";
import AgentsList from "../components/agentsPage/AgentsList";

const Agents = (props) => {
  const agents = useSelector((state) => state.agents);
  const selectedFilter = agents.filterStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgentsData());
  }, [dispatch]);
//   console.log(agents);

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
          <AgentsList agents = {filteredAgents}/>
        </div>
      </div>
    </div>
  );
};

export default Agents;
