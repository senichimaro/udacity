import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { newDataObjectQuestions } from "../utils/helpers";

// Components
import List from "./List";
import { CardPoll, CardQuestion } from "./Card";
import RedirectComponent from "./RedirectComponent";
import { handleSaveAnswer } from "../actions/questions";
import { handlerUserAnswer } from "../actions/users";

class QuestionComponent extends React.Component {
  state = {
    savedA: false
  }
  render() {

    const handleSubmit = (answerObject) => {
      this.props.dispatch(handleSaveAnswer(answerObject))
      this.props.dispatch(handlerUserAnswer(answerObject))
      this.setState({savedA: true})
    }

    /** Options or Results
     * filter unanswered, display questions if question_id is found
     * should else return poll results (not found)
     */
    let question = this.props.unanswered.filter((q) => {
      return q.id === this.props.match.params.question_id;
    });

    if (question.length) {
      question.map( obj => obj['authedUser'] = this.props.authedUser)
      return (
        this.state.savedA
        ? <RedirectComponent desiredPath={'/'}/>
        : (
          <List
            componentUsed={CardQuestion}
            componentPropName="entry"
            data={question}
            customProps={{handleSubmit}}
          />
        )
      );
    }

    question = this.props.answered.filter((q) => {
      return q.id === this.props.match.params.question_id;
    });
    question.map( obj => obj['authedUser'] = this.props.authedUser)

    return (
      question && (
        <List
          componentUsed={CardPoll}
          componentPropName="entry"
          data={question}
        />
      )
    );
  }
}

export default withRouter(connect(newDataObjectQuestions)(QuestionComponent));
