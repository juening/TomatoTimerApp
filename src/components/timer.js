import React, { Component, PropTypes } from 'react';
import Clock from './clock';
import Controls from './controls';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStatus: 'stopped',
      count: 0
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
          case 'started':
            this.startTimer();
            break;
          case 'stopped':
            this.setState({ count: 0});
          case 'paused':
            clearInterval(this.timer);
            this.timer = undefined;
            break;
      }
    }
  }


  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }


  startTimer() {
      this.timer = setInterval(()=>{
        const newCount = this.state.count + 1;
        this.setState({count:newCount});
      }, 1000);
  }

  handleStatusChange(newStatus) {
    this.setState({ timerStatus: newStatus });
  }
  render() {
    const { count, timerStatus } = this.state;
    return (
      <div className='timer'>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} statusChange={this.handleStatusChange} />
      </div>
    );
  }
}

export default Timer;
