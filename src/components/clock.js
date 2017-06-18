import React, { Component, PropTypes } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
  }
  formatSecond(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60 );
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    return minutes + ":" + seconds;
  }
  render() {
    const {totalSeconds} = this.props;
    return (
      <div className='clock'>
        <span className='clock-text'>
          {this.formatSecond(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  totalSeconds: PropTypes.number
};

Clock.defaultProps = {
  totalSeconds: 0
};

export default Clock;
