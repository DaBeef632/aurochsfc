import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { Component } from "react";
import MainPage from "./pages";
class App extends Component {
  render()
  return (

      <Router>
        <Switch>
          <Route path="/" component={MainPage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>

  );
}

export default App;
