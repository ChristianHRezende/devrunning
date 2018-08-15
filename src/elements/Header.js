import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ActionCreators from "../redux/actionCreators";
import { Menu, Dropdown, Image } from "semantic-ui-react";

import logo from "../assets/logo.png";
const trigger = user => (
  <div>
    <Image avatar src="https://imgur.com/I80W1Q0.png" />
    <strong>&nbsp; {user.name}</strong>
  </div>
);

const Header = ({ menu, auth, logout }) => (
  <Menu>
    <Menu.Item as={Link} to={menu.to || "/"}>
      <Image src={logo} size="small" />
      <small>
        &nbsp; <b>{menu.small}</b>
      </small>
    </Menu.Item>

    {menu.items &&
      menu.items.map((item, index) => (
        <Menu.Item as={Link} to={item.to} key={index} position={item.position}>
          {item.text}
        </Menu.Item>
      ))}

    {menu.dropdown && (
      <Menu.Menu position={menu.dropdown.position}>
        <Dropdown item trigger={trigger(auth.user)} icon="caret down">
          <Dropdown.Menu>
            {menu.dropdown.items &&
              menu.dropdown.items.map((item, index) => (
                <Dropdown.Item
                  as={Link}
                  to={item.to || "/"}
                  onClick={item.action === "logout" ? () => logout() : null}
                  key={index}
                >
                  {item.text}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )}
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
