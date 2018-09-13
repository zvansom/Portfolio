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
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: red;
  }
`;