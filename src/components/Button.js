import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Button = (props) => { 

  function handleClick() {
    props.handleClick(props.name)
  }
  return(
    <button className="btn" onClick={handleClick}>
      {props.name}
    </button>
  )
}
export default Button;

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func
};