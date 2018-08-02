import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Restrict = props => {
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  return <h1>Restrict</h1>;
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Restrict);
