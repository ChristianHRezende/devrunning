import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";

const Home = props => <h1>Home Admin</h1>;
const Users = props => <h1>Users Admin</h1>;

const menu = {
  text: "Corridas Online",
  small: "Admin",
  to: "/admin",
  items: [{ to: "/admin/user", text: "Usuários" }],
  dropdown: {
    position: "right",
    items: [
      { text: "Minha conta" },
      { text: "Alterar senha" },
      { text: "Modo restrito" },
      { text: "Sair", action: "logout" }
    ]
  }
};

const Admin = props => {
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  if (props.auth.user.role !== "admin") return <Redirect to="/restrito" />;
  return (
    <div>
      <Header menu={menu} />
      <h1>Admin</h1>
      <div>
        <Route path={`${props.match.path}`} exact component={Home} />
        <Route path={`${props.match.path}/users`} component={Users} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Admin);
