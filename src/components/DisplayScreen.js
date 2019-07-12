import React from 'react';
import '../App.css';
import AnswerScreen from './AnswerScreen';
import EquationScreen from './EquationScreen';

function DisplayScreen(props) {
  const { error, answer, mathEquation } = props;
  
  return(
    <div className="result_screen">
      <EquationScreen mathEquation={mathEquation}/>
      <AnswerScreen error={error} answer={answer}/>
    </div>
  )
}
export default DisplayScreen;

