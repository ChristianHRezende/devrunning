import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import store from "./redux";

import Home from "./screens/Home";
import Admin from "./screens/Admin";
import Restrict from "./screens/Restrict";
import Login from "./screens/Login";

import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route exact path="/restrito" component={Restrict} />
            <Route exact path="/login" component={Login} />

            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
