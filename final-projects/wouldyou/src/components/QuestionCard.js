import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionCard extends Component {
  handleLike = (e) => {
    e.preventDefault();
  };
  toParent = (e, id) => {
    e.preventDefault();
    // todo: Redirect to parent tweet
  };
  render() {
    console.log("questionCard props",this.props)
    return (
      <>
        <div className="tweet">
          <img className="avatar" src={"avatar"} alt={`Avatar of ${"name"}`} />
          <div className="tweet-info">
            <div>
              <span>{"name"}</span>
              <div>{"formatDate(timestamp)"}</div>
                <button
                  className="replying-to"
                  onClick={(e) => this.toParent(e)}
                >
                  Replaying to @{"parent.author"}
                </button>
              <p>{"text"}</p>
            </div>
            <div className="tweet-icons">
              <span>{"replies !== 0 && replies"}</span>
              <button className="heart-button" onClick={this.handleLike}>
                Click Me!
              </button>
              <span>{"likes !== 0 && likes"}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps({ users, questions }, {qs_id }) {
  let question = questions[qs_id];
  const author = users[question.author];
  
  return {
    question,
    author,
  };
}
export default connect(mapStateToProps)(QuestionCard);