import React, { Component, Fragment } from 'react';
import NavBar from './components/main/Navbar';
import Home from './components/main/Home';
import About from './components/main/About';
import Contact from './components/main/Contact'
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Home />
        <About />
        <Contact />
      </Fragment>
    );
  }
}

export default App;
