import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { SignUp } from "./SingUp";

class SocialButton extends React.Component {
  render() {
    return (
      <>
        <a href="#" className={`fa fa-${this.props.type}`}></a>
      </>
    );
  }
}

class TwitterButton extends React.Component {
  render() {
    return <SocialButton type="twitter" />;
  }
}

class FacebookButton extends React.Component {
  render() {
    return <SocialButton type="facebook" />;
  }
}

class IconBar extends React.Component {
  render() {
    return (
      <div className={this.props.orientation}>
        <div className="icon-bar">
          <a className="active" href="#">
            <i className="fa fa-home"></i>
          </a>
          <a href="#">
            <i className="fa fa-search"></i>
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="#">
            <i className="fa fa-globe"></i>
          </a>
          <a href="#">
            <i className="fa fa-trash"></i>
          </a>
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.initialActiveItemId,
      arrayItems: this.props.items,
    };
  }

  render() {
    return (
      <div className="navbar">
        {this.state.arrayItems.map((item) => {
          let active = null
          if (item === this.state.activeItem){
            active = 'active'
          } 
          return (
            <a className={active} href="#">
              <i className="fa fa-fw"></i>
              {item}
            </a>
          );
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <SignUp onSignUp = {(e) => {
        console.log(e.login)
      }}/>
      <TwitterButton />
      <FacebookButton />
      <IconBar orientation="vertical" />
      <IconBar orientation="horizontal" />
      <Navbar items={["Home", "Search", "About"]} initialActiveItemId="Search" />
      
    </div>
  );
}

export default App;
