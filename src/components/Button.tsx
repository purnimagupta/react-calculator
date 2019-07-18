import React from 'react';
import '../App.css';
import PropTypes, { string } from 'prop-types';

interface ButtonProps {
  name: string;
  handleClick: (name: string) => void;
}

const Button = (props: ButtonProps) => { 

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

// Button.propTypes = {
//   name: PropTypes.string,
//   handleClick: PropTypes.func
// };