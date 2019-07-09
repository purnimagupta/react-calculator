import React from 'react';
import '../App.css';

class Calculator extends React.Component {
  state = {
    answer: 0,
    mathEquation: '',
  }

  render() {
    return(
      <div className="calculator">
        <section className="keypad">
          <div className="keypad_row">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">Add(+)</button>
          </div>
          <div className="keypad_row">
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">7</button>
            <button className="btn">Subtract(-)</button>
          </div>
          <div className="keypad_row">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">Multiply(*)</button>
          </div>
          <div className="keypad_row">
            <button className="btn">Clear</button>
            <button className="btn">0</button>
            <button className="btn">=</button>
            <button className="btn">Divide(/)</button>
          </div>
        </section>
      </div>
    )
  }
}

export default Calculator;
