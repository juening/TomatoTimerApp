import React, { Component, PropTypes } from 'react';

class Controls extends Component {
  render() {
    const { countdownStatus } = this.props;
    function renderButton() {
      if(countdownStatus ==='started'){
        return (
          <button className='button secondary'>
            PAUSE
          </button>
        );
      } else {
        return (
          <button className='button primary'>
            START
          </button>
        );
      }
    }

    return (
      <div>
        {renderButton()}
        <button className='button hollow'>CLEAR</button>
      </div>
    );
  }
}

export default Controls;
