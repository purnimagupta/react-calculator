import React from 'react';
import '../App.css';
import Button from './Button';
const Keypad = (props) => {
  return(
    <section className="keypad">
      <div className="keypad_row">
        <Button name="1"></Button>
        <Button name="2"></Button>
        <Button name="3"></Button>
        <Button name="Add(+)"></Button>
      </div>
      <div className="keypad_row">
        <Button name="5"></Button>
        <Button name="6"></Button>
        <Button name="7"></Button>
        <Button name="Substract(-)"></Button>
      </div>
      <div className="keypad_row">
        <Button name="7"></Button>
        <Button name="8"></Button>
        <Button name="9"></Button>
        <Button name="Multiply(*)"></Button>
      </div>
      <div className="keypad_row">
        <Button name="Clear"></Button>
        <Button name="0"></Button>
        <Button name="="></Button>
        <Button name="Divide(/)"></Button>
      </div>
    </section>
  )
}
export default Keypad;
