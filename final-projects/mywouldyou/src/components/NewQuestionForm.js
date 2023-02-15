import React from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { dataObjectAuthedUser } from "../utils/helpers";
import { CardFormNewQuestion } from "./Card";
import RedirectComponent from "./RedirectComponent";
class NewQuestionForm extends React.Component {
  state = {
    savedQ: false
  }
  render() {
    const handleSubmit = (optionOne, optionTwo) => {
      const question = {
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: this.props.authedUser,
      };
      this.props.dispatch(handleSaveQuestion(question))
      this.setState({savedQ: true})
    };

    if (this.state.savedQ) {
      return <RedirectComponent desiredPath={'/'}/>
    }

    return <CardFormNewQuestion handleSubmit={handleSubmit} />;
  }
}

export default connect(dataObjectAuthedUser)(NewQuestionForm);
