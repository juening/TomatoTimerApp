import React, { Component, PropTypes } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }
  onStatusChange(newStatus) {
    return () => {this.props.statusChange(newStatus)} ;
  }
  render() {
    const { countdownStatus } = this.props;
    const renderButton = () => {
      if(countdownStatus ==='started'){
        return (
          <button className='button secondary' onClick={this.onStatusChange('paused')}>
            PAUSE
          </button>
        );
      } else {
        return (
          <button className='button primary' onClick={this.onStatusChange('started')}>
            START
          </button>
        );
      }
    }

    return (
      <div className='controls'>
        {renderButton()}
        <button className='button hollow' onClick={this.onStatusChange('stopped')}>CLEAR</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  statusChange: PropTypes.func.isRequired
};

export default Controls;
