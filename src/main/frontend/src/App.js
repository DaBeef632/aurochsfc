import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeComponent';
import FooterComponent from "./components/FooterComponent";
import ListSupporter from "./components/supportercomponent/ListSupporter";
import CreateSupporter from "./components/supportercomponent/CreateSupporter";
import ViewSupporter from "./components/supportercomponent/ViewSupporter";
import ViewBeer from "./components/beercomponent/ViewBeer";
import CreateBeer from "./components/beercomponent/CreateBeer";
import ListBeer from "./components/beercomponent/ListBeer";
import ClickMap from "./components/map/ClickMap";
import ViewCheckin from "./components/checkingcomponents/ViewCheckin";
import CreateCheckin from "./components/checkingcomponents/CreateCheckin";
import ListCheckin from "./components/checkingcomponents/ListCheckin";
import AurochsMap from "./components/map/aurochsmap";


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/"  exact component = {ListEmployeeComponent}></Route>
                        <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                        <Route path = "/add-employee/:id"  component = {CreateEmployeeComponent}></Route>
                        <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                        <Route path = "/supporters"  exact component = {ListSupporter}></Route>
                        <Route path = "/add-supporter/:supporterId"  component = {CreateSupporter}></Route>
                        <Route path = "/view-supporter/:supporterId" component = {ViewSupporter}></Route>
                        <Route path = "/beers"  exact component = {ListBeer}></Route>
                        <Route path = "/add-beer/:beerId"  component = {CreateBeer}></Route>
                        <Route path = "/view-beer/:beerId" component = {ViewBeer}></Route>
                        <Route path = "/aurochsmap" component = {ClickMap}></Route>
                        <Route path = "/checkins"  exact component = {ListCheckin}></Route>
                        <Route path = "/add-checkin/:checkinId"  component = {CreateCheckin}></Route>
                        <Route path = "/view-checkin/:checkinId" component = {ViewCheckin}></Route>


                    </Switch>
                    {/*<Switch>*/}
                    {/*<Route path = "/" exact component = {ListEmployeeComponent}></Route>*/}
                    {/*<Route path = "/employees" component = {ListEmployeeComponent}></Route>*/}
                    {/*      <Route path = "/employee" exact component = {ListEmployeeComponent}></Route>*/}
                    {/*      <Route path = "/employees" component = {ListEmployeeComponent}></Route>*/}
                    {/*      <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>*/}

                    {/*</Switch>*/}
                </div>
            <FooterComponent/>
        </Router>
    </div>

  );
}

export default App;
