// packages
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";

// Components
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";

// Styles
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        <Router>
          <Fragment>
            <LoadingBar style={{ backgroundColor: "#00EEEE" }} />
            <div className="container">
              <Nav />
              {this.props.loading === true ? null : (
                <Routes>
                  <Route path="/" exact element={<Login />} />
                  <Route path="/home" exact element={<Dashboard />} />
                  {/* <Route path="/tweet/:id" element={<TweetPage match={{params: {id: "2mb6re13q842wu8n106bhk" }}}/>} /> */}
                  {/* <Route path="/question/:id" element={<TweetPage />} /> */}
                  <Route path="/add" element={<NewQuestion />} />
                </Routes>
              )}
            </div>
          </Fragment>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.users === {},
  };
}

export default connect(mapStateToProps)(App);
