import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from '../../components/controls';


describe('test controls', ()=>{
  it('test component should exits', ()=>{
    expect(Controls).toExist();
  });

  describe('check the component render', () => {
    it('tests if the pause button can be rendered', ()=> {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(PAUSE)');
      expect($pauseButton.length).toBe(1);
    });

    it('test if the start button can be rendered', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus='stopped' />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $startButton = $el.find('button:contains(START)');
      expect($startButton.length).toBe(1);
    });
  });
});
