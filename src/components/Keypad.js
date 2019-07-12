import React from 'react';
import '../App.css';
import Button from './Button';
import PropTypes from 'prop-types';

const Keypad = (props) => {
  return(
    <section className="keypad">
      <div className="keypad_row">
        <Button name="1" handleClick={props.handleClick}></Button>
        <Button name="2" handleClick={props.handleClick}></Button>
        <Button name="3" handleClick={props.handleClick}></Button>
        <Button name="+" handleClick={props.handleClick}></Button>
      </div>
      <div className="keypad_row">
        <Button name="5" handleClick={props.handleClick}></Button>
        <Button name="6" handleClick={props.handleClick}></Button>
        <Button name="7" handleClick={props.handleClick}></Button>
        <Button name="-" handleClick={props.handleClick}></Button>
      </div>
      <div className="keypad_row">
        <Button name="7" handleClick={props.handleClick}></Button>
        <Button name="8" handleClick={props.handleClick}></Button>
        <Button name="9" handleClick={props.handleClick}></Button>
        <Button name="*" handleClick={props.handleClick}></Button>
      </div>
      <div className="keypad_row">
        <Button name="Clear" handleClick={props.handleClick}></Button>
        <Button name="0" handleClick={props.handleClick}></Button>
        <Button name="=" handleClick={props.handleClick}></Button>
        <Button name="/" handleClick={props.handleClick}></Button>
      </div>
    </section>
  )
}
export default Keypad;

Keypad.propTypes = {
  handleClick: PropTypes.func.isRequired
};