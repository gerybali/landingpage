import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h2>Our first title< br/>     coming soon!</h2>
            <div>
              <p> . . . </p>
              
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
