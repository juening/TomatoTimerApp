import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from '../../components/countdown';

describe('countdown test', () => {
  it('tests the countdown component exists', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown test', () => {
    it('tests the state of the component', (done)=>{
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);
      const { count, countdownStatus } = countdown.state;
      expect(count).toBe(10);
      expect(countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('tests if the count stop at 0', (done)=> {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(2);
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 4001);
    });

    it('should pause countdown on paused status', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });
    it('shoud stop countdown on stopped status', ()=>{
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus ).toBe('stopped');
    });
  });
});
