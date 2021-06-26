import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from "./components/restComponents/posts";
import { UserList } from "./pages/users";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./components/dashboard/Dashboard";
import authProvider from "./components/authorization/authProvider";
import AdminDash from "./pages/admin";
import { BrowserRouter as Router, Switer, Route } from "react-router-dom";
import Map from "./components/map/Map";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Router>
    <div className ="App">
      <Route path="/admin" component={AdminDash} />
      <Route path="/map" component={Map}/>
    </div>

  </Router>
)
export default App;
