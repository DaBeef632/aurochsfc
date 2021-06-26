

import { BrowserRouter as Router, Switch, Route,  Redirect } from "react-router-dom";

import { Component } from "react";
//pages
import MainPage from "./pages";
import PageNotFound from "./pages/404";
import BeersPage from "./pages/beers";
import { LoginForm } from "./components/accountBox/loginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/checkin" component={CheckinPage}
          <Route exact path="/404" component ={PageNotFound}/>
          <Route exact path="/beers" component = {BeersPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>

  );
};

}
export default App
