import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from '../../components/timer';

describe('test timer component', () => {
  it('test if the component exists', ()=> {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout(()=>{
      const time = timer.state.count;
      expect(time).toBe(3);
      done();
    }, 3001)
  });

  it('should pause timer on paused status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count:30});
    expect(timer.state.count).toBe(30);
    timer.handleStatusChange('paused');
    setTimeout(()=>{
      const time = timer.state.count;
      expect(time).toBe(30);
      done();
    }, 2001)
  });

  it('should stop timer on stopped status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count:10});
    expect(timer.state.count).toBe(10);
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');
    setTimeout(()=>{
      const time = timer.state.count;
      expect(time).toBe(0);
      done();
    }, 2001)
  });

});
