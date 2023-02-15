import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { dataObjectAuthedUser, saveRequestURL } from "../utils/helpers";

class RedirectComponent extends React.Component {
  render() {
    if (this.props.history.action === "POP") {
      localStorage.removeItem("requestURL");
      saveRequestURL(this.props.location.pathname);
    }

    return (
      <Redirect
        to={{
          pathname:
            localStorage.getItem("requestURL") && this.props.authedUser
              ? localStorage.getItem("requestURL")
              : this.props.desiredPath,
        }}
      />
    );
  }
}

export default withRouter(connect(dataObjectAuthedUser)(RedirectComponent));
