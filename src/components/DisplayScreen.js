import React from 'react';
import '../App.css';

function DisplayScreen(props) {
  const answer = ( props.error 
                                  ? 
                                  <div className="answer">{props.error}</div> 
                                  : 
                                   <div className="answer">{props.answer} </div>)
                  
  return(
    <div className="result_screen">
      {answer}
      <div className="equation">
        {props.mathEquation}
      </div>
    </div>
  )
}
export default DisplayScreen;
