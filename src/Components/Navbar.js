import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Resume from '../assets/file.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

export default class Navbar extends Component {
  state = {
    navOpen: false,
  }

  toggleClass = e => { this.setState({navOpen: !this.state.navOpen}) }

  render() {
    return(
      <nav>
        <img src={this.state.navOpen ? close : menu } onClick={ this.toggleClass } />
        <div className="social-media">
          <a className="resume" href="#"><img className="social-media__icons" src={Resume} />Resume</a>
          <a href="https://github.com/zvansom"><img className="social-media__icons" src={GitHub} /></a>
          <a href="https://www.linkedin.com/in/zach-vansomeren/"><img className="social-media__icons" src={LinkedIn} /></a>
        </div>
        <div className={this.state.navOpen ? "nav-drawer drawer-open" : "nav-drawer"}>
          <NavLink activeClassName="selected" exact to="/">Home</NavLink>
          <NavLink activeClassName="selected" to="/about">About Me</NavLink>
          <NavLink activeClassName="selected" to="/projects">Projects</NavLink>
          <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
        </div>
      </nav>
    )
  }
}
