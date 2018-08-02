import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Container } from "semantic-ui-react";

import store from "./redux";
import Home from "./screens/Home";
import Admin from "./screens/Admin";
import Restrict from "./screens/Restrict";
import Login from "./screens/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/restrito" component={Restrict} />
            <Route exact path="/login" component={Login} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
