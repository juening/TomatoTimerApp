import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from '../../components/countdownForm';

describe('countdown form component ', () => {
  it('should exits', ()=>{
    expect(CountdownForm).toExist();
  });

  // it('should call onSetCountdown if valid seconds entered', () => {
  //   const spy = expect.createSpy();
  //   const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
  //   const $el = $(ReactDOM.findDOMNode(countdownForm));
  //
  //   countdownForm.refs.secondsInput.value = '109';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //   expect(spy).toHaveBeenCalledWith(109);
  // });

  it('should call onSetCountdown if valid seconds entered', ()=>{
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.state={seconds:'110'};
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(110);
  });

  it('should not call onSetCountdown if invalid seconds entered', ()=>{
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.state = {seconds: 'abc'};
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
