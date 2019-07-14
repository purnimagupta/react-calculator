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
    let squaredNum = square(Number(mathEquation))
    this.setState({
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
      mathEquation: error ? error: sqrtNum.toString(),
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
      console.log(evalAnswer)
      if(Number.isNaN(evalAnswer) || evalAnswer === undefined) {
          error = "Error";
      } 
    }
    catch(error) {
      console.log(error)
    }
    this.setState({
      answer: evalAnswer,
      error: error,
      mathEquation: error ? error : evalAnswer.toString()
    });
  }
  /**
   * It concatenate clicked button's val to mathEquation state. 
   * Retrive last val of an array and sets it as current Val
   * 
   * Note: changeSignCurrentVal() will change the sign of this 
   *       retrived value.
   *
   * @param {String} numberbtns
   * 
   */
  concatNumbers = (numberbtns) => {
    let {mathEquation } = this.state;
    numberbtns = Number(numberbtns);
    mathEquation = mathEquation.concat(numberbtns);
    const arrVal = parseStringEquation(mathEquation)
    let lastElem = arrVal[arrVal.length-1]; 
    this.setState({
      mathEquation: mathEquation,
      currentVal: lastElem
    })
  }

  /**
   * It concatenate clicked button's val to mathEquation state. 
   * 
   * @param {String} operatorsbtns
   * 
   */
  concatOpearators = (operatorsbtns) => {
    let {mathEquation } = this.state;
    mathEquation = mathEquation.toString();
    mathEquation= mathEquation.concat(operatorsbtns);
  
    this.setState({
      mathEquation: mathEquation
    })
  }

  /**
   * performOperation calls corresponsing function when the given
   * condition is satisfied.
   * 
   * @param {String} btnName
   * 
   */
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
    const { mathEquation, answer, error } = this.state;
    return(
      <div className="calculator">
        <DisplayScreen mathEquation={mathEquation} answer={answer} error={error}/>
        <Keypad handleClick={this.performOperation}/>
        <ScientificKeypad handleClick={this.performOperation}/>
      </div>
    )
  }
}

export default Calculator;
