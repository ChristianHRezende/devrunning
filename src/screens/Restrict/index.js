import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./elements/Header";
import Home from "./Home";
import Runs from "./Runs";

const Restrict = props => {
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  return (
    <div>
      <Header />
      <h1>Restrict</h1>
      <div>
        <Route path={`${props.match.path}/`} exact component={Home} />
        <Route path={`${props.match.path}/runs`} component={Runs} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Restrict);
