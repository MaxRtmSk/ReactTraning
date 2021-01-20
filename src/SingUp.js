import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

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
            const nextState = {};
            let hasError = false;

            if (this.state.login.trim() === "") {
              nextState.loginError = true;
              hasError = true;
            }

            if (this.state.password === "") {
              nextState.passwordError = true;
              hasError = true;
            }

            if (this.state.passwordConfirmation === "") {
              nextState.passwordConfirmationError = true;
              hasError = true;
            }

            if (hasError) {
              this.setState(nextState);
            } else {
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
