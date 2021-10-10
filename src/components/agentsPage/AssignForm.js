import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agentsActions } from "../../store/agents-slice";
import FormFooter from "../UI/FormFooter";

const AssignForm = (props) => {
  const clinics = useSelector((state) => state.clinics.clinics);
  const [selectInput, setSelectInput] = useState("");
  const [agent, setNewAgent] = useState(props.agent);

  const dispatch = useDispatch();

  const assignClinicHandler = () => {
    dispatch(agentsActions.assignClinic(agent));
    const timer = setTimeout(() => {
      props.onClose();
    }, 3000);
    return () => clearTimeout(timer);
  };

  const onChangeHandler = ({
    target: {
      selectedOptions: [option],
    },
  }) => {
    setSelectInput(option.value);
    const name = option.value;
    const id = parseInt(option.getAttribute("id"), 10);
    setNewAgent({ ...agent, clinic_id: id, clinic_name: name });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Agent: {props.agent.name}</h4>
        <h5>Email: {props.agent.email}</h5>
        <label htmlFor="selectForm">Select Clinic: </label>
        <select
          className="form-select"
          onChange={onChangeHandler}
          required
          value={selectInput}
        >
          <option></option>
          {clinics.map((clinic) => {
            return (
              <option id={clinic.id} value={clinic.name} key={clinic.id}>
                {clinic.name}
              </option>
            );
          })}
        </select>
        <FormFooter onClose={props.onClose} onSubmit={assignClinicHandler} />
      </div>
    </div>
  );
};

export default AssignForm;
