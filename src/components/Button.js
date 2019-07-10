import React from 'react';
import '../App.css';

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
