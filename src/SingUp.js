import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import "./SingUp.scss";

export class SignUp extends React.Component {
  constructor(psops) {
    super(psops);
    this.state = {
      login: "",
      password: "",
      passwordConfirmation: "",
      passwordError: false,
      loginError: false,
      passwordConfirmationError: false,
    };
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className={this.state.loginError ? "input-error" : ""}
          name="login"
          type="text"
          value={this.state.login}
          onChange={(e) => {
            this.setState({
              login: e.target.value,
            });
          }}
        />
        <input
          className={this.state.passwordError && "input-error"}
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => {
            this.setState({
              password: e.target.value,
            });
          }}
        />
        <input
          className={this.state.passwordConfirmationError && "input-error"}
          name="passwordConfirmation"
          type="password"
          value={this.state.passwordConfirmation}
          onChange={(e) => {
            this.setState({
              passwordConfirmation: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            const nextState = {
              loginError: this.state.login.trim() === "",
              passwordError: this.state.password === "",
              passwordConfirmationError:
                this.state.passwordConfirmation !== this.state.password,
            };

            this.setState(nextState); //делаем всегда setState чтобы последний инпут переставал быть красным если пароли совпадают 

            //проверяем есть ли в nexState кто-то с true
            if (
              nextState.loginError ||
              nextState.passwordError ||
              nextState.passwordConfirmationError
            ) {
              this.props.onSignUp({
                login: this.state.login,
                password: this.state.password,
              });
            }
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}
