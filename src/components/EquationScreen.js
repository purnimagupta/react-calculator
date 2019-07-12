import React from 'react';
import '../App.css';

const EquationScreen = (props) => {
  return(
    <div className="equation">  
      {props.mathEquation}
    </div>
  )
}

export default EquationScreen;