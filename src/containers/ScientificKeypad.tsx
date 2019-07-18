import React from 'react';
import Button from '../components/Button';
import '../App.css';
import PropTypes from 'prop-types';

interface ScientificKeypadState {
  toggle: boolean;
  scienBtnArr: string[];
}
interface ScientificKeypadProps {
  handleClick: (name: string) => void;
}
class ScientificKeypad extends React.Component<ScientificKeypadProps, ScientificKeypadState> {
  // checking for props type
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  state = {
    toggle: false,
    scienBtnArr: ["Flip Sign", "Square", "Sqr Root"],
  }

  // It will toggle "scien-mode" button
  toggleMode = (name: string) => {
    if(name === "scien-mode") {
      this.setState((prevState) => ({
        toggle: !prevState.toggle,
      }))
    } 
  }

  render() {
    const { toggle, scienBtnArr } = this.state;
    const { handleClick } = this.props;

    // map over scienBtnArr[] and return buttons.
    const buttons = (
      toggle === true 
        ? scienBtnArr.map((btn) => (   
            <Button name={btn} key={btn} handleClick={handleClick}></Button>
          ))
        : null
    )

    return(
      <div className="keypad"> 
        <div style={{height: '11vh'}} className="keypad_row">
          <Button name="scien-mode" handleClick={this.toggleMode}/>
          {buttons}
        </div>
      </div>
    )
  }
}

export default ScientificKeypad;