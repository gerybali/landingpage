import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">paf<span>col</span></li>
          </ul>
          <ul>
              <li><a href="#">about</a></li>
              <li><a href="#">games</a></li>
              <li><a href="#">contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
