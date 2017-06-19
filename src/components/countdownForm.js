import React, { Component } from 'react';

class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      seconds: 'Enter the seconds'
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const field = e.target.value;
    let seconds = this.state.seconds;
    seconds = parseInt(e.target.value, 10);
    this.setState({ seconds: seconds });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSetCountdown(this.state.seconds);
    this.setState({ seconds: 0});
    // e.preventDefault();
    // var strSeconds = this.refs.secondsInput.value;
    // if(strSeconds.match(/^\d+$/)){
    //   this.props.onSetCountdown(parseInt(strSeconds, 10));
    //   this.refs.secondsInput = '';
    // }
  }
  render() {
    const { onSetCountdown } = this.props;
    return (
      <form onSubmit={this.onFormSubmit} className='countdown-form'>
        <input type='text' placeholder='Enter the total seconds' onChange={this.onChange}
           ref='secondsInput' name='secondsInput' value={this.state.seconds} onFocus={()=>{this.setState({seconds:''})}} />
        <button className='button expanded'>Start</button>
      </form>
    );
  }
}

export default CountdownForm;
