import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    const styles = {
      background: '#eee',
      color: '#222',
      borderBottom: '3px solid #222',
      
    }
    return(
      <StyledNav>
        <StyledLink activeStyle={{...styles}}  exact to="/">Home</StyledLink>
        <StyledLink activeStyle={{...styles}} to="/about">About Me</StyledLink>
        <StyledLink activeStyle={{...styles}} to="/resume">Resume</StyledLink>
        <StyledLink activeStyle={{...styles}} to="/skills">Skills</StyledLink>
        <StyledLink activeStyle={{...styles}} to="/projects">Projects</StyledLink>
        <StyledLink activeStyle={{...styles}} to="/contact">Contact</StyledLink>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-flow: column;
  background-color: #222;
`;

const StyledLink = styled(NavLink)`
  color: white;
  padding: 25px 0 0;
  min-height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: #222;
    background: #444;
  }
`;