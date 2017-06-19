import React, { Component, PropTypes } from 'react';
import Clock from './clock';
import CountdownForm from './countdownForm';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
  }
  handleSetCountdown(seconds) {
    this.setState({ count: seconds });
  }
  render() {
    const { count } = this.state;
    return (
      <div className='countdown'>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}

export default Countdown;
