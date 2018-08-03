import React, { Component } from "react";
import { connect } from "react-redux";
import timezones from "moment-timezone/data/meta/latest.json";
import { Grid } from "semantic-ui-react";
import ActionsCreators from "../../redux/actionCreators";
import Button from "../../elements/Button";

class MyAccount extends Component {
  state = {
    unit: "",
    timezone: ""
  };

  componentDidMount() {
    const { user } = this.props.auth;
    this.setState({
      unit: user.unit,
      timezone: user.timezone
    });
  }
  handleSave = () => {
    this.props.save({
      ...this.state,
      id: this.props.auth.user.id
    });
  };

  handleChange = fieldname => event => {
    this.setState({
      [fieldname]: event.target.value
    });
  };
  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Minha Conta</h1>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              text="Atualizar"
              color="blue"
              icon="save"
              action={this.handleSave}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <select
              value={this.state.unit}
              onChange={this.handleChange("unit")}
            >
              <option value="metric">Métrico (Km)</option>
              <option value="imperial">Imperial (mi)</option>
            </select>

            <select
              value={this.state.timezone}
              onChange={this.handleChange("timezone")}
            >
              {Object.keys(timezones.zones).map((timezone, index) => {
                return (
                  <option key={index} value={timezone}>
                    {timezone}
                  </option>
                );
              })}
            </select>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispacthToProps = dispatch => ({
  save: user => dispatch(ActionsCreators.updateProfileRequest(user))
});
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(MyAccount);
