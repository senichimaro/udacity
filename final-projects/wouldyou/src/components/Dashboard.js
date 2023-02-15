import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import QuestionCard from "./QuestionCard";

class Dashboard extends Component {
  state = {
    showUnanswered: false,
    showAnswered: false
  }
  render() {
    const { answered, unanswered } = this.props;
    return (
      <div className="dashboard-list" style={{marginTop: '10px'}}>
        <h2>Dashboard</h2>
        <button onClick={() => this.setState({showUnanswered:!this.state.showUnanswered})} className="center">Answered</button>
          <button onClick={() => this.setState({showAnswered:!this.state.showAnswered})} className="center">Unanswered</button>
      <div style={{display: this.state.showUnanswered ? 'block' : 'none'}} id="answered">
        <ul className="dashboard-list">
          {answered.map((qs) => (
            <QuestionCard key={qs.id} qs_id={qs.id} answered={true} />
            ))}
        </ul>
      </div>

      <div style={{display: this.state.showAnswered ? 'block' : 'none'}} id="unanswered">
        <ul className="dashboard-list">
          {answered.map((qs) => (
            <QuestionCard key={qs.id} qs_id={qs.id} unanswered={true} />
          ))}
        </ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered
  };
}
export default connect(mapStateToProps)(Dashboard);
