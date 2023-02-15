import React from "react";
import { connect } from "react-redux";
import { CardLogin } from "./Card";
import { dataLogin } from "../utils/helpers";
import { setAuthedUser } from "../actions/authedUser";
import RedirectComponent from "./RedirectComponent";

class Login extends React.Component {
  render() {
    // console.log("login",this.props);
    const handleLogin = (id) => {
      this.props.dispatch(setAuthedUser(id));
    };
    if (!this.props.authedUser) {
        return <CardLogin users={this.props.users} login={handleLogin} />;
    }
    else {
        return <RedirectComponent desiredPath={'/'}/>
    }
  }
}

export default connect(dataLogin)(Login);
