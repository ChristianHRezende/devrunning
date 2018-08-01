import React from "react";
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";

import logo from "../logo.svg";

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
);

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
