import React from 'react';
import Button from '../components/Button';
import '../App.css';
import PropTypes from 'prop-types';

class ScientificKeypad extends React.Component {
  // checking for props type
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  state = {
    toggle: false,
    scienBtnArr: ["Flip Sign", "Square", "Sqr Root"],
  }

  // It will toggle "scien-mode" button
  handleClick = (name) => {
    if(name === "scien-mode") {
      this.setState((prevState) => ({
        toggle: !prevState.toggle,
      }))
    } 
  }

  render() {
    const { toggle, scienBtnArr } = this.state;

    // map over scienBtnArr[] and return buttons.
    const buttons = (
      toggle === true 
        ? scienBtnArr.map((btn) => (   
            <Button name={btn} key={btn} handleClick={this.props.handleClick}></Button>
          ))
        : ''
    )

    return(
      <div className="keypad_row"> 
        <div style={{height: '11vh'}}>
          <Button name="scien-mode" handleClick={this.handleClick}/>
        </div>
        {buttons}
      </div>
    )
  }
}

export default ScientificKeypad;