import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Input, Segment, Form } from "semantic-ui-react";
import ActionsCreators from "../../redux/actionCreators";
import Button from "../../elements/Button";

class ChangePass extends Component {
  state = {
    passwd: "",
    passwd2: ""
  };

  componentDidMount() {
    this.props.reset();
  }

  handleSave = () => {
    this.props.save({
      passwd: this.state.passwd,
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
            <h1>Alterar Senha</h1>
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
        {this.props.auth.saved && (
          <Grid.Row columns="1">
            <Grid.Column>
              <Segment color="green">Senha alterada com sucesso!</Segment>
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Input
                type="password"
                value={this.state.passwd}
                onChange={this.handleChange("passwd")}
              />
              <Input
                type="password"
                value={this.state.passwd2}
                onChange={this.handleChange("passwd2")}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispacthToProps = dispatch => ({
  save: user => dispatch(ActionsCreators.updateProfileRequest(user)),
  reset: () => dispatch(ActionsCreators.updateProfileReset())
});
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(ChangePass);
