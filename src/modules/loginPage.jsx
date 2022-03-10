import React from "react";
import Layout from "./layout";

const Login = (props) => {
  const {
    user,
    username,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    onLogout,
  } = props;
  if (!user) {
    return (
      <React.Fragment>
        <h3>Wprowadź proszę swój login i hasło poniżej</h3>
        <form className="login">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Login{" "}
            </label>
            <input
              autoFocus
              value={username}
              onChange={onEmailChange}
              type="email"
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Wpisz email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Haslo
            </label>
            <input
              name="password"
              value={password}
              onChange={onPasswordChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Wpisz haslo"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary submit"
            onClick={onSubmit}
          >
            Zaloguj sie
          </button>
        </form>
      </React.Fragment>
    );
  } else {
    return (
      <Layout
        username={username}
        password={password}
        user={user}
        onSubmit={onSubmit}
        onLogout={onLogout}
      />
    );
  }
};

export default Login;
