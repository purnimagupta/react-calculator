import React from 'react';
import '../App.css';
import DisplayScreen from '../components/DisplayScreen';
import Keypad from '../components/Keypad';
import parseStringEquation from '../utils/parseStringEquation';
import evalEquation from '../utils/evalEquation';
import { EROFS } from 'constants';

class Calculator extends React.Component {
  state = {
    answer: 0,
    mathEquation: '',
    error:''
    
  }

  performOperation = (btnName) => {
    // name = Number(name);
    let { mathEquation } = this.state;
    let evalAnswer=0;
    let error;

    if(btnName === "Clear") {
      return this.setState({
        mathEquation: '',
        answer: 0,
        error: ''
      })
    }
    else if( btnName >= '0' && btnName <= '9') {
      btnName = Number(btnName);
      mathEquation = mathEquation.concat(btnName);
    }
    else if(['+', '-', '/', '*'].indexOf(btnName) !== -1) {
      mathEquation = mathEquation.concat(btnName);
    }
    else if(btnName === "=") {
      try {
        evalAnswer = evalEquation(parseStringEquation(this.state.mathEquation))
        if(Number.isNaN(evalAnswer)) {
            error = "Error";
        }
        // else {

        // }
        console.log(evalAnswer)
      }
      catch(error) {
        console.log(error)
      }
    }
    
    this.setState({
      mathEquation: mathEquation,
      answer: evalAnswer,
      error: error
    });
  }

  render() {
    const { mathEquation, answer, error } = this.state;
    console.log(this.state)
    return(
      <div className="calculator">
        <DisplayScreen mathEquation={mathEquation} answer={answer} error={error}/>
        <Keypad handleClick={this.performOperation}/>
      </div>
    )
  }
}

export default Calculator;
