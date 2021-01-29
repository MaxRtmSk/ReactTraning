import React from "react";
import ReactDOM from "react-dom";

import "./numberValidation.css";

export class CardForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardNumber: "",
    }
  
  }

  render(){
    return(
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input
          name="card"
          value={this.state.cardNumber}
          maxLength="16"
          onChange={(e)=>{
            this.setState({
              cardNumber: e.target.value
            })
          }}
        />
        <input

        />
        <input
          name="date"
        />
        <input
          name="CVV"
        />
        <button onChange={()=>{

        }}>Отправить</button>
      </form>
    )
  }

}


// Форма должна содержать
// * Поле номера карты, которое должно требовать строго 16 цифр
// * Имя владельца, строго латиницей
// * Валидна до: 2 поля - одно для месяца (число от 1 до 12) и одно для года (две цифры года, не может быть меньше текущего года, должно работать и в следующем году, поэтому сравнивать с числом 20 нельзя, нужно узнавать какой сейчас год)
// * CVV - 3 или 4 цифры
// * Кнопка "добавить карту" по нажатию на которую будет происходить валидация формы и если форма не валидна, поля должны быть подсвечены красным