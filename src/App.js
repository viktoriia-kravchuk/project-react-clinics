import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainDashboard from "./pages/MainDashboard";
import DashboardAnalytics from "./pages/DashboardAnalytics";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainDashboard />
        </Route>
        <Route path="/dashboard">
          <DashboardAnalytics />
        </Route>
        <Route path="/dashboard/clinic-bill-stats"></Route>
        <Route path="/dashboard/patiens/visits"></Route>
        <Route path="/dashboard/patiens/followups"></Route>
        <Route path="/dashboard/call-recordings"></Route>
        <Route path="/dashboard/clinics"></Route>
        <Route path="/dashboard/patiens"></Route>
        <Route path="/dashboard/agents"></Route>
        <Route path="/dashboard/field-agents"></Route>
        <Route path="/dashboard/field-agents/tasks"></Route>
        <Route path="/inventory/medicine-inventory"></Route>
        <Route path="/inventory/clinic-lab-test"></Route>
        <Route path="/dashboard/clinic/services"></Route>
        <Route path="/dashboard/instructional-videos"></Route>
        <Route path="/audit/activities"></Route>
        <Route path="/expense/all"></Route>
      </Switch>
    </Layout>
  );
}

export default App;
