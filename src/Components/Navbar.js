import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    const styles = {
      background: '#eee',
      color: '#222',
      borderBottom: '2px solid #22222280',
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
  align-items: center;
  background-color: #22222280;

  > a:nth-of-type(1) {
    margin-left: 100px;
  }

  > a:last-of-type {
    margin-right: 100px;
  }
`;

const StyledLink = styled(NavLink)`
  color: white;
  padding: 5px 0 0;
  min-height: 30px;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  &:hover {
    background: #444;
  }
`;