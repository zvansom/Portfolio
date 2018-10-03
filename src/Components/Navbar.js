import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Resume from '../assets/file.svg';

export default class Navbar extends Component {
  state = {
    navOpen: false,
  }

  toggleClass = e => { this.setState({navOpen: !this.state.navOpen}) }

  render() {
    return(
      <nav>
        <button onClick={ this.toggleClass }>X</button>
        <div className="social-media">
          <a className="resume" href="#"><img className="social-media__icons" src={Resume} />Resume</a>
          <a href="https://github.com/zvansom"><img className="social-media__icons" src={GitHub} /></a>
          <a href="https://www.linkedin.com/in/zach-vansomeren/"><img className="social-media__icons" src={LinkedIn} /></a>
        </div>
        <div className={this.state.navOpen ? "nav-drawer drawer-open" : "nav-drawer"}>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    )
  }
}
