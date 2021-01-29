import React from "react";
import ReactDOM from "react-dom";
import "./numberValidation.css";

export class NumberValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      error: false,
    };
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.number}
          maxLength="13"
          className={this.state.error ? "numberfalied" : ""}
          onChange={(e) => {
            let number = e.target.value.substr(0, 6)
            console.log(number)
            if (number == '+37529' || number == '+37533' || number == '+37544' || number == '+37525') {
              this.setState({ number: e.target.value, error: false });
            } else {
              this.setState({ number: e.target.value, error: true });
            }
          }}
        />
      </>
    );
  }
}
