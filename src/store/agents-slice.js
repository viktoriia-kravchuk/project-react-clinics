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
    assignClinic(state, action) {},
    deactivateAgent(state, action) {},
  },
});

export const agentsActions = agentsSlice.actions;

export default agentsSlice;
