import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

export class SignUp extends React.Component {
  constructor(psops){
    super(psops)
    this.state = {
      login : '',
      password : '',
      passwordConfirmation: ''
    }
  }

  render(){
    return <form onSubmit = {(e) => {e.preventDefault()}}>
    <input 
    name = 'login'
    type = 'text'
    value = {this.state.login}
    onChange = {(e) => {
      this.setState({
        login: e.target.value
      })
    }}/>
    <button
      onClick={()=>{
        this.props.onSignUp({login: this.state.login})
      }}
    >Submit</button>
    </form>
  }
}