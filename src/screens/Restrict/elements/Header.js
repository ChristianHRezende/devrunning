import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActionCreators from "../../../redux/actionCreators";
import { Menu, Dropdown, Image } from "semantic-ui-react";

const trigger = user => (
  <div>
    <Image avatar src="https://imgur.com/I80W1Q0.png" />
    <strong>&nbsp; {user.name}</strong>
  </div>
);

const Header = props => (
  <Menu>
    <Menu.Item>
      Corridas Online
      <small>&nbsp; Restrito</small>
    </Menu.Item>
    <Menu.Item as={Link} to="/restrito">
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/restrito/runs">
      Corridas
    </Menu.Item>
    <Menu.Menu position="right">
      <Dropdown
        item
        icon="avatar"
        trigger={trigger(props.auth.user)}
        icon="caret down"
      >
        <Dropdown.Menu>
          <Dropdown.Item>Minha conta</Dropdown.Item>
          <Dropdown.Item>Alterar senha</Dropdown.Item>
          <Dropdown.Item onClick={() => props.logout()}>Sair</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(ActionCreators.destroyAuthRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
