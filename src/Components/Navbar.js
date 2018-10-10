import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Resume from '../assets/file.svg';
import resume from '../assets/Resume.pdf';
import { ReactComponent as Menu } from '../assets/menu.svg';
import { ReactComponent as Close } from '../assets/close.svg';

export default class Navbar extends Component {
  state = {
    navOpen: false,
  }

  toggleDrawer = e => { this.setState({navOpen: !this.state.navOpen}) }

  render() {
    return(
      <nav>
        {this.state.navOpen ? 
          <Close onClick={ this.toggleDrawer } className="nav-menu" /> :
          <Menu onClick={ this.toggleDrawer } className="nav-menu" />
        }
        <div className="social-media">
          <a className="resume" href={resume} rel="noopener noreferrer" target="_blank">
            <img className="social-media__icons" src={Resume} alt="Zach VanSomeren's Resume" />Resume
          </a>
          <a href="https://github.com/zvansom">
            <img className="social-media__icons" src={GitHub} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/zach-vansomeren/">
            <img className="social-media__icons" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>

        {/* --------------------------- */}
        {/* ----       DRAWER      ---- */}
        {/* --------------------------- */}

        <div className={this.state.navOpen ? "nav-drawer drawer-open" : "nav-drawer"}>
          <NavLink activeClassName="selected" exact to="/" onClick={ this.toggleDrawer }>Home</NavLink>
          <NavLink activeClassName="selected" to="/about" onClick={ this.toggleDrawer }>About Me</NavLink>
          <NavLink activeClassName="selected" to="/projects" onClick={ this.toggleDrawer }>Projects</NavLink>
          <NavLink activeClassName="selected" to="/contact" onClick={ this.toggleDrawer }>Contact</NavLink>
          <div className="footer">
            
          </div>
        </div>
      </nav>
    )
  }
}
