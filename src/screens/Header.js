import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActionCreators from "../redux/actionCreators";
import { Menu } from "semantic-ui-react";

const Header = props => (
  <Menu>
    <Menu.Item>Corridas Online</Menu.Item>
    <Menu.Item as={Link} to="/">
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/admin">
      Admin
    </Menu.Item>
    <Menu.Item as={Link} to="/restrito">
      Restrito
    </Menu.Item>
    <Menu.Item as={Link} to="/login">
      Login
    </Menu.Item>
  </Menu>
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
