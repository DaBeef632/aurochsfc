import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from "/restComponents/posts";
import { UserList } from "/pages/users";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "/dashboard/Dashboard";
import authProvider from ".authProvider./components/authorization/authProvider";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const AdminDash = () => (
<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)
 export default AdminDash
