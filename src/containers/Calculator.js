import React from 'react';
import '../App.css';
import DisplayScreen from '../components/DisplayScreen';
import Keypad from '../components/Keypad';

class Calculator extends React.Component {
  state = {
    answer: 0,
    mathEquation: '',
  }

  render() {
    return(
      <div className="calculator">
        <DisplayScreen />
        <Keypad />
      </div>
    )
  }
}

export default Calculator;
