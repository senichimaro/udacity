import React from "react";
import { connect } from "react-redux";
import { newDataObjectQuestions } from "../utils/helpers";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Components
import List from "./List";
import { CardQuestionClass } from "./Card";

class ShowQuestionsContainer extends React.Component {
  render() {
    this.props.unanswered.sort((a,b) => b.timestamp - a.timestamp)
    this.props.answered.sort((a,b) => b.timestamp - a.timestamp) 
    return (
      this.props.unanswered && (
        <>
          <Tabs
            defaultActiveKey="unanswered"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="unanswered" title="Unanswered">
              <List
                componentUsed={CardQuestionClass}
                componentPropName="entry"
                data={this.props.unanswered}
              />
            </Tab>
            <Tab eventKey="answered" title="Answered">
              <List
                componentUsed={CardQuestionClass}
                componentPropName="entry"
                data={this.props.answered}
              />
            </Tab>
          </Tabs>
        </>
      )
    );
  }
}

export default connect(newDataObjectQuestions)(ShowQuestionsContainer);
