import React from 'react';
import styled from 'styled-components';
import { Hero, About, Experience, Projects } from '../../components';

const Wrapper = styled.div`
  width: 100%;
  background-color: #d7d7d7;
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Wrapper>
  );
};

export default Home;
