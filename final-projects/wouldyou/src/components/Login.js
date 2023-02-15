// packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { useNavigate } from 'react-router-dom';


class Login extends Component {
  state = {
    avatar: "",
    name: "",
    id: "",
  };

  handleUserChange = ({ id, avatar, name}) => {
    this.setState({ id, avatar, name});
  }

  render() {
    const { users } = this.props;
    const { name, avatar, id } = this.state;
    return (
      <>
        <div className="tweet">
          <img
            className="avatar"
            src={avatar.length ? avatar : "https://bit.ly/3tJs7bg"}
            alt={`Avatar of ${name}`}
          />
          <div className="tweet-info">
            <label htmlFor="users_login">{"Choose a user:"}</label>

            <LoginCard users={users} id={id} dispatch={this.props.dispatch} handleUserChange={this.handleUserChange}/>
            
          </div>
        </div>
      </>
    );
  }
}

function LoginCard({users, id, dispatch, handleUserChange}) {
  const navigate = useNavigate();
  const UserChange = (e) => {
    const id = e.target.value;
    const user = users[id];
    const name = users[id].name;
    handleUserChange({ id: e.target.value, avatar: user.avatarURL, name: name })
    dispatch(setAuthUser(id))
  };

  return (
    <>
      <select
        defaultValue={"anonimous"}
        name="users_login"
        id="users_login"
        onChange={UserChange}
      >
        <option value={"anonimous"} disabled>
          Select...
        </option>
        {Object.keys(users).map((user) => (
          <option value={user} key={user}>
            {users[user]["name"]}
          </option>
        ))}
      </select>
      <button
        className="btn"
        onClick={(e) => navigate('/home')}
      >
        Log in
      </button>
    </>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Login);
