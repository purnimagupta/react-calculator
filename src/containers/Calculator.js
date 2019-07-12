import React from 'react';
import '../App.css';
import DisplayScreen from '../components/DisplayScreen';
import Keypad from '../components/Keypad';
import parseStringEquation from '../utils/parseStringEquation';
import evalEquation from '../utils/evalEquation';
import ScientificKeypad from './ScientificKeypad';
import squareRoot from '../utils/squareRoot';
import square from '../utils/square';
import * as constants from '../constants';

class Calculator extends React.Component {
  state = {
    answer: 0,
    mathEquation: '',
    error:'',
    currentVal: '',
    sqrtVal: '',
    squaredNum: '',
    equalToClicked: false
  }
  
  getCurrentVal = (str) => {
    let lastElem = str[str.length-1];    
    this.setState({
      currentVal: lastElem,
    })
  }

  changeSignCurrentVal = (currentVal) => {
    console.log("changeSignCurrentVal", currentVal)
    this.setState({
      currentVal: currentVal*-1
    }, () => this.updateEquationOnSign())
    
  }

  updateEquationOnSign = () => {
    const { mathEquation } = this.state;
    let equationArray = parseStringEquation(mathEquation);
    let lastIndex = equationArray.length-1;
    let lastElem = equationArray[equationArray.length-1];
    equationArray.splice(lastIndex, 1, lastElem*-1)

    this.setState(  {
      mathEquation: equationArray.join([])
    })

  }

  squareNumber = () => {
    const { mathEquation } = this.state;
    // console.log(currentVal, mathEquation)
    let squaredNum = square(Number(mathEquation))
    console.log("squaredNum", squaredNum)
    this.setState({
      squaredNum: squaredNum,
      mathEquation: squaredNum.toString(),
      answer: squaredNum
    });
  }

  clearData = () => {
    this.setState({
      mathEquation: '',
      answer: 0,
      error: '',
      currentVal: '',
      sqrtVal: '',
      squaredNum: '',
    })
  }

  getSquareRoot = () => {
    const { mathEquation } = this.state;
    let error, sqrtNum;
    if(Math.sign(mathEquation) === -1) {
        error = "Square root of negative number can't be calculated"
    }else{
        sqrtNum = squareRoot(Number(mathEquation));
    }
    this.setState({
      sqrtVal: sqrtNum,
      mathEquation: error? error: sqrtNum.toString(),
      answer: sqrtNum,
      error: error
    });
    error='';
  }

  calculateEquation = () => {
    let evalAnswer, error;
    try {
      const { mathEquation } = this.state;
      evalAnswer = evalEquation(parseStringEquation(mathEquation))
      if(Number.isNaN(evalAnswer)) {
          error = "Error";
      } 
    }
    catch(error) {
      console.log(error)
    }
    this.setState({
      answer: evalAnswer,
      error: error,
      mathEquation: evalAnswer.toString()
    });
  }

  concatNumbers = (numberbtns) => {
    let {mathEquation } = this.state;
    numberbtns = Number(numberbtns);
    mathEquation = mathEquation.concat(numberbtns);
    const val = parseStringEquation(mathEquation)
    this.getCurrentVal(val);
    this.setState({
      mathEquation: mathEquation
    })
  }

  concatOpearators = (operatorsbtns) => {
    let {mathEquation } = this.state;
    if(typeof mathEquation === "number") {
      mathEquation = mathEquation.toString();
      mathEquation= mathEquation.concat(operatorsbtns);
    }
    else {
      mathEquation= mathEquation.concat(operatorsbtns);
    }
    this.setState({
      mathEquation: mathEquation
    })
  }


  performOperation = (btnName) => {
    const { currentVal} = this.state;

    if(btnName === constants.CLEAR) {
      return this.clearData();
    }
    if(btnName === constants.FLIP_SIGN) {
      this.changeSignCurrentVal(currentVal);
    }
    if(btnName === constants.SQR_ROOT) {
      this.getSquareRoot();
      // this.calculateSquareRoot();
    }
    if(btnName === constants.SQUARE) {
      this.squareNumber();
    }
    else if( btnName >= '0' && btnName <= '9') {
      this.concatNumbers(btnName)
    }
    else if(['+', '-', '/', '*'].indexOf(btnName) !== -1) {
      this.concatOpearators(btnName)
    }
    else if(btnName === "=") {
      this.calculateEquation();
    }

  }

  render() {
    const { mathEquation, answer, error, currentVal, sqrtClicked, sqrtVal, squaredNum } = this.state;
    return(
      <div className="calculator">
        <DisplayScreen mathEquation={mathEquation} answer={answer} error={error} currentVal={currentVal} sqrtVal={sqrtVal} squaredNum={squaredNum}/>
        <Keypad handleClick={this.performOperation}/>
        <ScientificKeypad handleClick={this.performOperation} sqrtClicked={sqrtClicked}/>
      </div>
    )
  }
}

export default Calculator;
