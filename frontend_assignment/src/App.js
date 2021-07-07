import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeDetails from "./container/EmployeeDetails";
import PieChart from "./container/PieChart";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EmployeeDetails} />
        <Route exact path="/chart" component={PieChart} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
