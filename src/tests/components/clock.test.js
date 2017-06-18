import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from '../../components/clock';

describe('clock', ()=>{
  it('should exists', ()=>{
    expect(Clock).toExist();
  });

  describe('render ', () => {
    it('should render clock to output', ()=>{
        const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
        const $el = $(ReactDOM.findDOMNode(clock));
        const actualText = $el.find('.clock-text').text();
        expect(actualText).toBe('01:02');
    });
  });

  describe('test formatSecond function', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 655;
      const expected = '10:55';
      const actual = clock.formatSecond(seconds);
      expect(actual).toBe(expected);
    });
    it('should formate seconds with 0', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 62;
      const expected = '01:02';
      const actual = clock.formatSecond(seconds);
      expect(actual).toBe(expected);
    });
  });
});
