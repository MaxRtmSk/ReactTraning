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
      errorMessages: [],
    };
  }

  onChange = (e) => {
    //часты приём при работе с инпутами больше нигде так делать не стоит. Это посмотреть какой name у таргета e.tagret.name. И дальше мы воспользуемся тем что к js можно обрашатся через фигурные скобки к объекту
    const name = e.target.name;
    const nextState = {};
    nextState[name] = e.target.value;

    this.setState(nextState);
  }

  render() {
    return (
      <div>
        {this.state.errorMessages.length ? (<ul className="error-messages">{this.state.errorMessages.map((message, index) => <li key={index}>{message}</li>)}</ul>) : null} 
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
            onChange={this.onChange}
          />
          <input
            className={this.state.passwordError && "input-error"}
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            className={this.state.passwordConfirmationError && "input-error"}
            name="passwordConfirmation"
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
          <button
            onClick={() => {
              const nextState = {
                loginError: this.state.login.trim() === "",
                passwordError: this.state.password === "",
                passwordConfirmationError:
                  this.state.passwordConfirmation !== this.state.password,
                errorMessages: [],
              };

              this.setState(nextState);

              if (nextState.loginError) {
                nextState.errorMessages.push("Логин должен быть заполнен");
              }

              if (nextState.passwordError) {
                nextState.errorMessages.push("Пароль должен быть введен");
              }

              if (nextState.passwordConfirmationError) {
                nextState.errorMessages.push(
                  "Потверждение должно совпадать с паролем"
                );
              }

              if (!Object.values(nextState).includes(true)) {
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
      </div>
    );
  }
}
