import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { dataObjectNavigation } from "../utils/helpers";

// styles
import "../App.css";
class Navigation extends React.Component {
  render() {
    const name = this.props.users[this.props.authedUser].name
    const avatar = this.props.users[this.props.authedUser].avatarURL
    return (
      <nav className="navbar bg-light">
        <div className="container">
          <span className="navbar-brand">
            <img
              className="App-logo"
              src={avatar}
              alt="Rotationg Atom with its orbits"
              width="50"
              height="36"
            />
            {name}
          </span>
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="navbar-item ms-1">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item ms-1">
              <Link to="/leaderboard">Leader Board</Link>
            </li>
            <li className="navbar-item ms-1">
              <Link to="/add">New Question</Link>
            </li>
            <li className="navbar-item ms-1">
              <button onClick={this.props.handleLogOut} className="btn btn-outline-danger">Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(dataObjectNavigation)(Navigation);
