import {Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "../ListEmployeeComponent";
import CreateEmployeeComponent from "../CreateEmployeeComponent";
import ViewEmployeeComponent from "../ViewEmployeComponent";
import React from "react";
import ListSupporter from "../supportercomponent/ListSupporter";
import CreateSupporter from "../supportercomponent/CreateSupporter";
import ViewSupporter from "../supportercomponent/ViewSupporter";

export default [

    <Route path = "/supporters"  exact component = {ListSupporter}></Route>,
    <Route path = "/supporters" component = {ListSupporter}></Route>,
    <Route path = "/add-supporter/:supporterId"  component = {CreateSupporter}></Route>,
    <Route path = "/view-supporter/:supporterId" component = {ViewSupporter}></Route>

]

