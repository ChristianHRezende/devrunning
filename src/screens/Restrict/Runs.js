import React, { Component } from "react";
import { connect } from "react-redux";

import { Table, Grid } from "semantic-ui-react";
import ActionsCreators from "../../redux/actionCreators";
import Button from "../../elements/Button";
import Distance from "../../elements/Distance";
import Duration from "../../elements/Duration";
import DateStr from "../../elements/Date";

class Runs extends Component {
  componentDidMount() {
    this.props.load();
  }

  renderRun = run => {
    return (
      <Table.Row key={run.id}>
        <Table.Cell>{run.friendly_name}</Table.Cell>
        <Table.Cell>
          <Duration duration={run.duration} />
        </Table.Cell>
        <Table.Cell>
          <Distance
            metric={this.props.auth.user.unit}
            distance={run.distance}
          />
        </Table.Cell>
        <Table.Cell>
          <DateStr
            date={run.created}
            timezone={this.props.auth.user.timezone}
          />
        </Table.Cell>
      </Table.Row>
    );
  };
  render() {
    const run = {
      friendly_name: "run de test",
      duration: 100,
      distance: 100,
      created: "2018-01-01 00:00:00"
    };
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Corridas</h1>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              text="Criar"
              color="blue"
              icon="add"
              action={() => this.props.create(run)}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Table celled color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>Duração</Table.HeaderCell>
                  <Table.HeaderCell>Distância</Table.HeaderCell>
                  <Table.HeaderCell>Data</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.runs.data.map(this.renderRun)}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ runs: state.runs, auth: state.auth });
const mapDispacthToProps = dispatch => ({
  load: () => dispatch(ActionsCreators.getRunsRequest()),
  create: run => dispatch(ActionsCreators.createRunRequest(run))
});
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Runs);
