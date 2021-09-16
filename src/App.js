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
        <Route path="/dashboard/clinic-bill-stats">
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
