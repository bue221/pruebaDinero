import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Paths } from "./routesEnums";

import DashboardPage from "../components/pages/Dashboard";
import LoginPage from "../components/pages/Login";

const RoutesComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path={Paths.DASHBOARD} component={DashboardPage} />
        <Route path={Paths.LOGIN} component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default RoutesComponent;
