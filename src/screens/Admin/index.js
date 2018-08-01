import React from "react";
import { Link, Route } from "react-router-dom";

const Home = props => <h1>Home Admin</h1>;
const Users = props => <h1>Users Admin</h1>;

const Admin = props => {
  return (
    <div>
      <h1>Admin</h1>
      <p>
        <Link to="/admin">Home</Link>
        <Link to="/admin/users">Users</Link>
      </p>
      <div>
        <Route path={`${props.match.path}`} exact component={Home} />
        <Route path={`${props.match.path}/users`} component={Users} />
      </div>
    </div>
  );
};
export default Admin;
