import React, { Component, PropTypes } from 'react';
import Clock from './clock';

class Countdown extends Component {
  render() {
    return (
      <div className='countdown'>
        <Clock totalSeconds={129} />
      </div>
    );
  }
}

export default Countdown;
