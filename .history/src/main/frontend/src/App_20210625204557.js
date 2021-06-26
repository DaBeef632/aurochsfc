import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from "./components/restComponents/posts";
import { UserList } from "./pages/users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
<Admin dataProvider={dataProvider} >
  <Resource name="posts" list={PostList} edit={EditGuesser} />
  <Resource name="users" list={UserList} />
  </Admin>
);
export default App;
