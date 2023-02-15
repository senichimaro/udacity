import React from "react";
import { Link } from "react-router-dom";

export function CardQuestion({ entry, handleSubmit }) {
  const [optionValue, setOptionValue] = React.useState("");

  const handleClick = () => {
    const answerObject = {
      qid: entry.id,
      authedUser: entry.authedUser,
      answer: optionValue,      
    }
    handleSubmit(answerObject)
  }
  return (
    <div className="card m-1" style={{ width: "30rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        {entry.user.name} asks:
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionOne"
            onChange={(e) => setOptionValue(e.target.id)}
          />
          <label className="form-check-label" htmlFor="optionOne">
            {entry.optionOne.text}
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionTwo"
            onChange={(e) => setOptionValue(e.target.id)}
          />
          <label className="form-check-label" htmlFor="optionTwo">
            {entry.optionTwo.text}
          </label>
        </div>

        <button 
          onClick={handleClick}
          disabled={!optionValue}
          type="button" 
          className={`btn btn-${!optionValue ? 'secondary' : 'primary'}`}>
          Submit
        </button>
      </div>
    </div>
  );
}

export function CardQuestionClass({ entry }) {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        {entry.user.name} asks:
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>
        <p>{entry.optionOne.text}</p>
        <Link style={{ color: "inherit" }} to={`/questions/${entry.id}`}>
          <button type="button" className="btn btn-primary">
            View Question
          </button>
        </Link>
      </div>
    </div>
  );
}

export function CardPoll({ entry }) {
  // console.log("entry", entry);

  // Votes
  // count voutes
  const votesOne = entry.optionOne.votes.length;
  const votesTwo = entry.optionTwo.votes.length;

  // total votes
  const totalVotes = votesOne + votesTwo;

  // percentage
  const perOne = (votesOne * 100) / totalVotes;
  const perTwo = (votesTwo * 100) / totalVotes;

  const myVoteOne = entry.optionOne.votes.includes(entry.authedUser);
  const myVoteTwo = entry.optionTwo.votes.includes(entry.authedUser);

  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.user.avatarURL} style={avatar} alt="User Avatar" />
        Asked by {entry.user.name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>

        <div className="container" style={myVoteOne ? selected : {}}>
          <p>{entry.optionOne.text}</p>
          <div className="progress my-1">
            <div
              className={`progress-bar ${
                perOne > perTwo
                  ? "bg-success"
                  : perOne === perTwo
                  ? ""
                  : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${perOne ? perOne : "12"}%` }}
            >
              {perOne ? Math.round(perOne) : "0"}%
            </div>
          </div>
          <p>
            {votesOne ? votesOne : "0"} out of {totalVotes} votes
          </p>
        </div>

        <hr />

        <div className="container" style={myVoteTwo ? selected : {}}>
          <p>{entry.optionTwo.text}</p>
          <div className="progress my-1">
            <div
              className={`progress-bar ${
                perTwo > perOne
                  ? "bg-success"
                  : perOne === perTwo
                  ? ""
                  : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${perTwo ? perTwo : "12"}%` }}
            >
              {perTwo ? Math.round(perTwo) : "0"}%
            </div>
          </div>
          <p>
            {votesTwo ? votesTwo : "0"} out of {totalVotes} votes
          </p>
        </div>
      </div>
    </div>
  );
}

export function CardUser({ entry }) {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <img src={entry.avatarURL} style={avatar} alt="User Avatar" />
        {entry.name}
      </div>

      <div className="card-body">
        <h5 className="card-title">Would you rather...</h5>

        <div className="d-flex align-items-center">
          <div className="text">
            <p>Questions asked - {entry.score.totalAskd}</p>
            <p>Questions answered - {entry.score.totalAnsw}</p>
          </div>

          <div
            className="ms-3 text-white bg-success"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-header">Score</div>
            <div className="card-body text-center">{entry.score.totalQ}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardFormNewQuestion({ handleSubmit }) {
  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");

  const maxChar = 5

  const handleClick = () => {
    handleSubmit(optionOne, optionTwo)
  };
  
  return (
    <form className="card m-1" style={{ width: "20rem" }}>
      <div className="card-header">
        <h5 className="card-title">Would you rather...</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Option One
          </label>
          <input
            onChange={(e) => setOptionOne(e.target.value)}
            type="text"
            className="form-control"
            id="optionOne"
            placeholder="Provide an option..."
          />
          {optionOne.length < maxChar ? (
            <span className="small text-muted">
              Minimum characters {maxChar - optionOne.length}
            </span>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Option Two
          </label>
          <input
            onChange={(e) => setOptionTwo(e.target.value)}
            type="text"
            className="form-control"
            id="optionTwo"
            placeholder="Provide an option..."
          />
          {optionTwo.length < maxChar ? (
            <span className="small text-muted">
              Minimum characters {maxChar - optionTwo.length}
            </span>
          ) : null}
        </div>
      </div>
      <div className="card-footer text-center">
        <button
          onClick={handleClick}
          disabled={
            /**
             * Is it true that it's false both expressions <= maxChar, AND,
             * Is it false that it's false both expressions (true) && (true): yes.
             * yes, it's true, that it's false that both expression are false.
             * Then, if it evaluates to false: disabled:true
             * or if it evalutates to true: disabled:true.
             *
             * This means, the value is <= maxChar when nothing is wrote,
             * the opossite of this is false,
             * once more, the global wrapper set the opposite, which is true,
             * So, if the ecuation is true: disabled:true.
             */
            !(!(optionOne.length < maxChar) && !(optionTwo.length < maxChar))
              ? true
              : false
          }
          type="button"
          className="btn btn-primary"
        >
          Submit Question
        </button>
      </div>
    </form>
  );
}

export const CardLogin = ({ users, login }) => {
  const [getValue, setValue] = React.useState(false);
  const handleSubmit = () => {
    login(getValue);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        className="mb-4"
        src={getValue ? users[getValue].avatarURL : "https://bit.ly/3tJs7bg"}
        alt="User Avatar"
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={(e) => setValue(e.target.value)}
      >
        <option>Open this select menu</option>
        {Object.entries(users).map((user, i) => (
          <option value={user[1].id} key={i}>
            {user[1].name}
          </option>
        ))}
      </select>

      <button
        disabled={!getValue}
        onClick={handleSubmit}
        className={`w-100 btn btn-lg btn-${
          !getValue ? "secondary" : "primary"
        }`}
        type="button"
      >
        Sign in
      </button>
    </div>
  );
};

const avatar = {
  width: "40px",
  height: "40px",
};

const selected = {
  border: "2px solid #f0ad4e",
  padding: "10px",
};
