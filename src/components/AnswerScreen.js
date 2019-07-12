import React from 'react';
import '../App.css';

const AnswerScreen = (props) => {
  
  const answer = (
    props.error 
      ? 
      <div className="answer">{props.error}</div>
      :
      <div className="answer">{props.answer} </div>
  )
  return(
    <div>  
      Ans: {answer}
    </div>
  )
}

export default AnswerScreen;