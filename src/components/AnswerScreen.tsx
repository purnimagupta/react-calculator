import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

interface AnswerScreenProps {
  error: string;
  answer: number;
}

const AnswerScreen = (props: AnswerScreenProps) => {
  
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

// AnswerScreen.propTypes = {
//   error: PropTypes.string,
//   answer: PropTypes.number
// };

