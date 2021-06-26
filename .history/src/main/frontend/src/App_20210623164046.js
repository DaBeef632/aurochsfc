

import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";

import { Component } from "react";
//pages
import MainPage from "./pages";
import PageNotFound from "./pages/404";
import BeersPage from "./pages/beers";
import checkinMap from "./pages/checkInMap";
class App extends Component {
  render() {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component ={PageNotFound}/>
          <Route exact path="/beers" component = {BeersPage}/>
          <Route exact path="/checkinmap" component = {checkinMap}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>

  );
};

}
export default App
