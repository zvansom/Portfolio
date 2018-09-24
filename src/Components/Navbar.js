import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return(
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
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

const StyledLink = styled(Link)`
  color: white;
  padding: 25px 0 0;
  min-height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: red;
    background: #444;
  }
`;