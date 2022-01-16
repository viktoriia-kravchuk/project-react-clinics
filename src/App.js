import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainDashboard from "./pages/MainDashboard";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import Clinics from "./pages/Clinics";
import Agents from "./pages/Agents";
import MedicinesInventory from "./pages/MedicinesInventory";
import LabTests from "./pages/LabTests";
import Services from "./pages/Services";
import Bills from "./pages/Bills";

export const URL =
  "https://clinics-2e161-default-rtdb.europe-west1.firebasedatabase.app/clinics";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainDashboard />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardAnalytics />
        </Route>
        <Route path="/dashboard/clinic-bill-stats">
          <Bills />
        </Route>
        <Route path="/dashboard/patiens/visits"></Route>
        <Route path="/dashboard/patiens/followups"></Route>
        <Route path="/dashboard/call-recordings"></Route>
        <Route path="/dashboard/clinics">
          <Clinics />
        </Route>
        <Route path="/dashboard/patiens"></Route>
        <Route path="/dashboard/agents">
          <Agents />
        </Route>
        <Route path="/dashboard/field-agents"></Route>
        <Route path="/dashboard/field-agents/tasks"></Route>
        <Route path="/inventory/medicine-inventory">
          <MedicinesInventory />
        </Route>
        <Route path="/inventory/clinic-lab-test">
          <LabTests />
        </Route>
        <Route path="/dashboard/clinic/services">
          <Services />
        </Route>
        <Route path="/dashboard/instructional-videos"></Route>
        <Route path="/audit/activities"></Route>
        <Route path="/expense/all"></Route>
      </Switch>
    </Layout>
  );
}

export default App;
