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

  render() {
    return (
      <div>
        {this.state.errorMessages.length ? (<ul className="error-messages">{this.state.errorMessages.map((message, index) => <li key={index}>{message}</li>)}</ul>) : null} 
        {/* даём ключ li, это может быть либо  индекс в массиве либо само сообщение, чтобы реакт не ругался*/}
        {/* {this.state.errorMessages.length && ... */}
        {/* нельзя использовать сокращение потомучто вернулся ноль, ставим вопрос а если нет то возрашаем null*/}
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
