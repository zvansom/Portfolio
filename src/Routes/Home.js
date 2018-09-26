import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <StyledMain>
    <h2>Hi, I'm <span>Zach</span></h2>
    <h3>I like to build things</h3>
    <p>
      I've built things my whole life.  Now I build performative, engaging websites.  Let's build something together.
    </p>
    <a className="button" href="/about">Step 1</a>
  </StyledMain>
);

export default Home;

const StyledMain = styled.main`
  grid-template-rows: 1fr 2fr 3fr 1fr;
  
  > h2 {
    align-self: flex-end;
    font-size: 4rem;
    border: 1px solid black;
    > span {
      text-transform: uppercase;
    }
  }
  > h3 {
    
  }
  > a {
    justify-self: center;
  }
`;
