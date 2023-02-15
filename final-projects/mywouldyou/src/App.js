import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Async Actions
import { receiveInitialData } from "./actions/shared";

// Components
import Login from "./components/Login";
import LeaderboardContainer from "./components/LeaderboardContainer";
import NewQuestionForm from "./components/NewQuestionForm";
import PageWrapper from "./components/PageWrapper";
import QuestionComponent from "./components/Question";
import Error404 from "./components/Error404";

// styles
import "bootswatch/dist/litera/bootstrap.min.css";
import HomeComponent from "./components/HomeComponent";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(receiveInitialData());
  }
  render() {
    return (
      <Router>
        <React.Fragment>
        <Switch>
          <Route exact path="/login">
            <div className="d-flex flex-column align-items-center p-5">
              <Login />
            </div>
          </Route>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/leaderboard">
            <PageWrapper componentUsed={LeaderboardContainer} />
          </Route>
          <Route exact path="/add">
            <PageWrapper componentUsed={NewQuestionForm} />
          </Route>
          <Route path="/questions/:question_id">
            <PageWrapper componentUsed={QuestionComponent} />
          </Route>
          <Route path="/">
            <PageWrapper componentUsed={Error404} />
          </Route>
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

function MapStateToProps(state) {
  return {
    loading: Object.keys(state.questions).length < 1,
  };
}
export default connect(MapStateToProps)(App);
