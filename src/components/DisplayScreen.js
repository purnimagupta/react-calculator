import React from 'react';
import '../App.css';
import AnswerScreen from './AnswerScreen';
import EquationScreen from './EquationScreen';

function DisplayScreen(props) {
  const { sqrtVal, squaredNum, error, answer, mathEquation, currentVal } = props;
  
  return(
    <div className="result_screen">
      <EquationScreen mathEquation={mathEquation}/>
      <AnswerScreen error={error} answer={answer} sqrtVal={sqrtVal} squaredNum={squaredNum} currentVal={currentVal}/>
    </div>
  )
}
export default DisplayScreen;

