import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <StyledMain>
    <h1>Hi, I'm <span>Zach</span></h1>
    <h2>I like to build things</h2>
    <p>
      I've built things my whole life.  Now I build performative, engaging websites.  Let's build something together.
    </p>
    <a className="button" href="/about">Step 1</a>
  </StyledMain>
);

export default Home;

const StyledMain = styled.main`
  > a {
    justify-self: center;
  }
`;
