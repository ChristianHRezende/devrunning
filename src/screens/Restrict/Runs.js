import React, { Component } from "react";
import { connect } from "react-redux";

import { Table, Button, Icon } from "semantic-ui-react";
import ActionsCreators from "../../redux/actionCreators";

class Runs extends Component {
  componentDidMount() {
    this.props.load();
  }

  renderRun(run) {
    return (
      <Table.Row key={run.id}>
        <Table.Cell>{run.friendly_name}</Table.Cell>
        <Table.Cell>{run.distance}</Table.Cell>
        <Table.Cell>{run.distance}</Table.Cell>
        <Table.Cell>{run.created}</Table.Cell>
      </Table.Row>
    );
  }
  render() {
    const run = {
      friendly_name: "run de test",
      duration: 100,
      distance: 100,
      created: "2018-01-01 00:00:00"
    };
    return (
      <div>
        <h1>Corridas</h1>
        <Button animated color="blue">
          <Button.Content visible>Criar</Button.Content>
          <Button.Content hidden>
            <Icon name="add" />
          </Button.Content>
        </Button>
        <Table celled color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Duração</Table.HeaderCell>
              <Table.HeaderCell>Distância</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.props.runs.data.map(this.renderRun)}</Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ runs: state.runs });
const mapDispacthToProps = dispatch => ({
  load: () => dispatch(ActionsCreators.getRunsRequest()),
  create: run => dispatch(ActionsCreators.createRunRequest(run))
});
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Runs);
