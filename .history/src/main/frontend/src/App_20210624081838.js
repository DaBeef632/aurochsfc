

import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";

import { Component } from "react";
//pages
import MainPage from "./pages";
import PageNotFound from "./pages/404";
import BeersPage from "./pages/beers";
import Login from "./components/Login/Login";
import CheckinPage from "./pages/checkin";
import SupporterPage from "./pages/supporter";
import 'bootstrap/dist/css/bootstrap.min.css';

import Map from "./components/Map/ClickMap";
class App extends Component {
  render() {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/checkin" component={CheckinPage}/>
          <Route exact path="/supporter" component={SupporterPage}/>
          <Route exact path="/404" component ={PageNotFound}/>
          <Route exact path="/beers" component = {BeersPage}/>

          <Redirect to="/404"/>

        </Switch>
      </Router>

  );
};

}
export default App
