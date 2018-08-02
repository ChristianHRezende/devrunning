import React, { Component } from "react";
import { connect } from "react-redux";
import ActionsCreators from "../../redux/actionCreators";

class Runs extends Component {
  componentDidMount() {
    this.props.load();
  }

  renderRun(run) {
    return (
      <tr>
        <td>{run.friendly_name}</td>
        <td>{run.distance}</td>
        <td>{run.distance}</td>
        <td>{run.created}</td>
      </tr>
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
        <h1>Runs</h1>
        <button onClick={() => this.props.create(run)}>Create</button>
        <table>{this.props.runs.data.map(this.renderRun)}</table>
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
