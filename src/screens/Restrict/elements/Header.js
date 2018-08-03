import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActionCreators from "../../../redux/actionCreators";
import { Menu } from "semantic-ui-react";

const Header = props => (
  <Menu>
    <Menu.Item>
      Corridas Online
      <small>
        <b> &nbsp; Restrito</b>
      </small>
    </Menu.Item>
    <Menu.Item as={Link} to="/restrito">
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/restrito/runs">
      Corridas
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
