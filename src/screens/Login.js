import React, { Component } from "react";
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";

class Login extends Component {
  state = {
    form: {
      email: "",
      passwd: ""
    }
  };

  handleChange = fieldName => event => {
    const form = {
      ...this.state.form
    };
    form[fieldName] = event.target.value;
    this.setState({ form });
  };

  login = () => {
    const { email, passwd } = this.state.form;
    this.props.login(email, passwd);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={this.state.form.email}
          onChange={this.handleChange("email")}
        />
        <input
          type="password"
          value={this.state.form.passwd}
          onChange={this.handleChange("passwd")}
        />
        <button onClick={this.login}>Logar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  login: (email, passwd) =>
    dispatch(ActionCreators.signinRequest(email, passwd))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
