import React, { useState, useEffect } from "react";
import StatusCard from "./StatusCard";
import ProfileDetails from "./ProfileDetails";
import DocumentsDetails from "./DocumentsDetails";
import Modal from "../UI/Modal";
import AssignForm from "./AssignForm";
import { useDispatch } from "react-redux";
import { agentsActions } from "../../store/agents-slice";

const AgentInfoCard = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [updatedAgent, setUpdatedAgent] = useState(props.agent);
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useDispatch();

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  useEffect(() => {
    if (isUpdated) {
      dispatch(agentsActions.changeAgentInfo(updatedAgent));
    }
  }, [dispatch, updatedAgent]);

  const deactivateAgentHandler = () => {
    setUpdatedAgent({ ...updatedAgent, status: 11 });
    setIsUpdated(true);
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: "15px" }}>
      <div className="card shadow" style={{ height: "100%", padding: "10px" }}>
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
            <ProfileDetails agent={props.agent} />
            <DocumentsDetails documents={props.agent.documents} />
            <button className="btn btn-primary" onClick={showModalHandler}>
              Assign Clinic
            </button>{" "}
            <button className="btn btn-danger" onClick={deactivateAgentHandler}>
              Deactivate
            </button>
            {modalIsShown && (
              <Modal onClose={hideModalHandler} header="Assign Clinic">
                <AssignForm agent={props.agent} onClose={hideModalHandler} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfoCard;
