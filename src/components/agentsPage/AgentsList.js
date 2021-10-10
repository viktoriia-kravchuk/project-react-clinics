import React from "react";
import AgentInfoCard from "./AgentInfoCard";

const AgentsList = (props) => {
  //console.log(props.agents);
  return (
    <div className="row" style={{ marginLeft: "1px" }}>
      {props.agents.map((agent) => (
        <AgentInfoCard agent={agent} key={agent.id} />
      ))}
    </div>
  );
};

export default AgentsList;
