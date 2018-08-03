import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../../elements/Header";
import Home from "./Home";
import Runs from "./Runs";
import MyAccount from "./MyAccount";

const menu = {
  text: "Corridas Online",
  small: "Restrito",
  to: "/restrito",
  items: [{ to: "/restrito/runs", text: "Corridas" }],
  dropdown: {
    position: "right",
    items: [
      { text: "Minha conta", to: "/restrito/my-account" },
      { text: "Alterar senha" },
      { text: "Sair", action: "logout" }
    ]
  }
};

const Restrict = props => {
  if (props.auth.isSigningin) return <p>Carregando..</p>;
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  return (
    <div>
      <Header menu={menu} />
      <div>
        <Route path={`${props.match.path}/`} exact component={Home} />
        <Route path={`${props.match.path}/runs`} component={Runs} />
        <Route path={`${props.match.path}/my-account`} component={MyAccount} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Restrict);
