import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Routes/Home'
import About from './Routes/About'
import Resume from './Routes/Resume'
import Skills from './Routes/Skills'
import Projects from './Routes/Projects'
import Contact from './Routes/Contact'
import FourOhFour from './Routes/FourOhFour'

import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
