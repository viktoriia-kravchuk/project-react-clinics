import { createSlice } from "@reduxjs/toolkit";

const agentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    totalQuantity: 0,
    changed: false,
    filterStatus:10
  },
  reducers: {
    showAgents(state, action) {
      state.agents = action.payload.agents;
      state.totalQuantity = state.agents.length;
    },
    setFilterStatus(state, action){
      state.filterStatus = action.payload
    },
    assignClinic(state, action) {
      state.changed = true;
      const updatedAgent = action.payload;
      const arrayIndex = state.agents.findIndex((agent) => agent.id === updatedAgent.id);
      state = {
        ...state,
        agents: {
          ...state.agents,
          ...state.agents[arrayIndex] = updatedAgent,
        },
      };
    },
    deactivateAgent(state, action) {
      state.changed = true;
    },
  },
});

export const agentsActions = agentsSlice.actions;

export default agentsSlice;
