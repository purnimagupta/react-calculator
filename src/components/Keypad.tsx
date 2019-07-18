import React from 'react';
import '../App.css';
import Button from './Button';
import PropTypes from 'prop-types';

interface KeypadProps {
  handleClick: (name: string) => void;
}
class Keypad extends React.Component<KeypadProps> {
  state = {
    btns: ["1", "2","3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "Clear", "0", "=", "/" ],
  }

  createBtns = () => {
    let keypad_row = []
    const { btns } = this.state;
    for (let i = 0; i<btns.length; i=i+4) {
      let button = [];
      //Inner loop to create button
      for (let j = i; j < 4+i; j++) {
        button.push(<Button name={btns[j]} key={j + 1} handleClick={this.props.handleClick}></Button>)
      }
      keypad_row.push(<div className="keypad_row" key={btns[i]+1}>{button}</div>)
    }
    return keypad_row
  }

  render() {
    return(
        <section className="keypad">        
          {this.createBtns()}  
        </section>
    )
  }
}

export default Keypad;

// Keypad.propTypes = {
//   handleClick: PropTypes.func.isRequired
// };