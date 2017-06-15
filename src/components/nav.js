import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

class Nav extends Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Tomato Timer</li>
            <li>
              <IndexLink activeClassName='active-link' activeStyle={{fontWeight: 'bold'}} to="/">React Tomato Timer</IndexLink>
            </li>
            <li>
              <Link activeClassName='active-link' activeStyle={{fontWeight: 'bold'}} to="timer">Timer</Link>
            </li>
            <li>
              <Link activeClassName='active-link' activeStyle={{fontWeight: 'bold'}} to="countdown">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://jueningweb.com" target="_blank">Jue Ning</a></li>
          </ul>
      
        </div>
      </div>
    );
  }
}

export default Nav;
