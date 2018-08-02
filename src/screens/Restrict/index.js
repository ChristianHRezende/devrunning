import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";
import Runs from "./Runs";

const Restrict = props => {
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  return (
    <div>
      <h1>Restrict</h1>
      <p>
        <Link to="/restrito">Home</Link>
        <Link to="/restrito/runs">Runs</Link>
      </p>
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
