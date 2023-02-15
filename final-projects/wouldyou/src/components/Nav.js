import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthUser } from "../actions/authUser";
import { useNavigate } from 'react-router-dom';


class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthUser(null));
  };

  render() {
    const { authUser } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className="active">
              Login
            </NavLink>
          </li>
          {authUser && (
            <>
              <li>
                <NavLink to="/home" className="active">
                  Home
                </NavLink>
              </li>
              <li>
                <LogoutButton handleLogout={this.handleLogout}/>
              </li>
            </>
          )}
          {console.log("authUser", authUser)}
        </ul>
      </nav>
    );
  }
}

function LogoutButton({handleLogout}) {
  const navigate = useNavigate();
  const userLogout = (e) => {
    handleLogout(e)
    navigate('/')
  }
  return (
    <button type="button" onClick={userLogout}>
      Log Out
    </button>
  );
}

const mapStateToProps = ({ authUser }) => ({ authUser });
export default connect(mapStateToProps)(Nav);
