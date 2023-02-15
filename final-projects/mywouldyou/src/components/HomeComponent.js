import React from "react";
import PageWrapper from "./PageWrapper";
import ShowQuestionsContainer from "./ShowQuestionsContainer";

export default class HomeComponent extends React.Component {
    render(){
        return (
            this.props.loading ? (
                <p>Loading...</p>
              ) : (
                <PageWrapper componentUsed={ShowQuestionsContainer} />
              )
        )
    }
}