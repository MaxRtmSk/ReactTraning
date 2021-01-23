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
      error: {
        password: false,
        login: false,
        password: false,
        messages: [],
      },
    };
  }

  onChange = (e) => {
    //часты приём при работе с инпутами больше нигде так делать не стоит. Это посмотреть какой name у таргета e.tagret.name. И дальше мы воспользуемся тем что к js можно обрашатся через фигурные скобки к объекту
    const name = e.target.name;
    const nextState = {};
    nextState[name] = e.target.value;

    this.setState(nextState);
  };

  render() {
    return (
      <div>
        {this.state.error.messages.length ? (
          <ul className="error-messages">
            {this.state.error.messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        ) : null}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {[
            {
              name: "login",
              type: "text",
              text: "Логин",
            },
            {
              name: "password",
              type: "password",
              text: "Пароль",
            },
            {
              name: "passwordConfirmation",
              type: "password",
              text: "Подтверждение пароля",
            },
          ].map((inputParams) => (
            <React.Fragment key={inputParams.name}>
              <label htmlFor={inputParams.name}>{inputParams.text}</label>
              <input
                type={inputParams.type}
                name={inputParams.name}
                onChange={this.onChange}
                value={this.state[inputParams.name]}
                className={
                  this.state.error[inputParams.name] ? "input-error" : ""
                }
              />
            </ React.Fragment>
          ))}
          <button
            onClick={() => {
              const nextError = {
                login: this.state.login.trim() === "",
                password: this.state.password === "",
                passwordConfirmation:
                  this.state.passwordConfirmation !== this.state.password,
                messages: [],
              };

              if (nextError.login) {
                nextError.messages.push("Логин должен быть заполнен");
              }

              if (nextError.password) {
                nextError.messages.push("Пароль должен быть введен");
              }

              if (nextError.passwordConfirmation) {
                nextError.messages.push(
                  "Потверждение должно совпадать с паролем"
                );
              }

              this.setState({ error: nextError });

              if (!Object.values(nextError).includes(true)) {
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
