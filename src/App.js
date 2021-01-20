import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { SignUp } from "./SingUp";


function App() {
  return (
    <div className="App">
      <SignUp onSignUp = {(e) => {
        console.log(e.login)
        console.log(e.password)
      }}/> 
    </div>
  );
}

export default App;
