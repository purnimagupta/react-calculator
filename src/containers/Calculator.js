import React from 'react';
import '../App.css';
import DisplayScreen from '../components/DisplayScreen';
import Keypad from '../components/Keypad';
import parseStringEquation from '../utils/parseStringEquation';
import evalEquation from '../utils/evalEquation';
import ScientificKeypad from './ScientificKeypad';

class Calculator extends React.Component {
  state = {
    answer: 0,
    mathEquation: '',
    error:'',
    currentVal: ''
  }
  getParseEquation = (str) => {
    return parseStringEquation(str)
  }
  getCurrentVal = (str) => {
    let lastElem = str[str.length-1];    
    this.setState({
      currentVal: lastElem,
    })

  }

  changeSignCurrentVal = (currentVal) => {
    console.log(currentVal)
     if(Math.sign(currentVal) === 1) {
      console.log(currentVal)
      currentVal= currentVal*-1
    }
    else if((Math.sign(currentVal) === -1)) {
      console.log(currentVal)
      currentVal= currentVal*-1
    }
    this.setState({
      currentVal: currentVal
    }, () => this.updateEquationOnSign())
    
  }

  updateEquationOnSign = (currentVal) => {
    const { mathEquation } = this.state;
    let str = parseStringEquation(mathEquation);
    let lastIndex = str.length-1;
    let lastElem = str[str.length-1];
    let newLastVal;
    if((Math.sign(lastElem) === 1)) {
       newLastVal = str.splice(lastIndex, 1, lastElem*-1)
       console.log("newLastVal is ", newLastVal[0])
       console.log("str if positive is", str)
    }
    else if((Math.sign(lastElem) === -1)) {
      newLastVal = str.splice(lastIndex, 1, lastElem*-1)
      console.log("newLastVal is ", newLastVal[0])
      console.log("str if negative is", str)
    }

    this.setState({
      mathEquation: str.join([,])
    })

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
        error: '',
        currentVal: ''
      })
    }
    if(btnName === "Flip Sign") {
      const { currentVal } = this.state;
      this.changeSignCurrentVal(currentVal);
    }
    else if( btnName >= '0' && btnName <= '9') {
      btnName = Number(btnName);
      mathEquation = mathEquation.concat(btnName);
      const val = this.getParseEquation(mathEquation)
      this.getCurrentVal(val);
    }
    else if(['+', '-', '/', '*'].indexOf(btnName) !== -1) {
      mathEquation = mathEquation.concat(btnName);
    }
    else if(btnName === "=") {
      try {
        // console.log(parseStringEquation(mathEquation));
        evalAnswer = evalEquation(parseStringEquation(mathEquation))
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
      error: error,
    });
  }

  render() {

    const { mathEquation, answer, error, currentVal } = this.state;
    // console.log(this.state)
    return(
      <div className="calculator">
        <DisplayScreen mathEquation={mathEquation} answer={answer} error={error} currentVal={currentVal}/>
        <Keypad handleClick={this.performOperation}/>
        <ScientificKeypad handleClick={this.performOperation}/>
      </div>
    )
  }
}

export default Calculator;
