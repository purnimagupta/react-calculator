import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

interface EquationScreenProps {
  mathEquation: string;
}
const EquationScreen = (props: EquationScreenProps) => {
  return(
    <div className="equation">  
      {props.mathEquation}
    </div>
  )
}

export default EquationScreen;

// EquationScreen.propTypes = {
//   mathEquation: PropTypes.string
// };