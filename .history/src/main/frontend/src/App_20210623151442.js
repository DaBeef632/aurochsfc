import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { Component } from "react";
//pages
import MainPage from "./pages";
import PageNotFound from "./pages/404";
import BeersPage from "./pages/beers";
class App extends Component {
  render() {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component ={PageNotFound}/>
          <Route exact path="/beers" component = {BeersPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>

  );
};


