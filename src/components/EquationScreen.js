import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const EquationScreen = (props) => {
  return(
    <div className="equation">  
      {props.mathEquation}
    </div>
  )
}

export default EquationScreen;

EquationScreen.propTypes = {
  mathEquation: PropTypes.string
};