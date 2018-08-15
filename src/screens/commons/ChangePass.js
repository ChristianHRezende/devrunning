import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Form } from "semantic-ui-react";
import ActionsCreators from "../../redux/actionCreators";
import Button from "../../elements/Button";

class ChangePass extends Component {
  state = {
    passwd: "",
    passwd2: "",
    error: ""
  };

  componentDidMount() {
    this.props.reset();
  }

  handleSave = () => {
    if (this.state.passwd !== this.state.passwd2)
      this.setState({ error: "equal" });
    else if (this.state.passwd.length < 6) this.setState({ error: "length" });
    else {
      this.props.save({
        passwd: this.state.passwd,
        id: this.props.auth.user.id
      });
      this.setState({ error: "" });
    }
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
        {this.props.auth.saved &&
          !this.state.error && (
            <Grid.Row columns="1">
              <Grid.Column>
                <Segment color="green">Senha alterada com sucesso!</Segment>
              </Grid.Column>
            </Grid.Row>
          )}
        {this.state.error && (
          <Grid.Row columns="1">
            <Grid.Column>
              <Segment color="red">
                {this.state.error === "equal" &&
                  "As Senhas não se correspondem!"}
                {this.state.error === "length" &&
                  "A senha deve possuir no mínimo 6 caracteres!"}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        )}

        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label>Nova senha:</label>
                <Form.Input
                  type="password"
                  value={this.state.passwd}
                  onChange={this.handleChange("passwd")}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirmação de senha:</label>
                <Form.Input
                  type="password"
                  value={this.state.passwd2}
                  onChange={this.handleChange("passwd2")}
                />
              </Form.Field>
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
