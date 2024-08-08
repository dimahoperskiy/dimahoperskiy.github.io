import React from 'react';
import styled from 'styled-components';
import { Hero, About, Experience, Projects } from '../../components';

const Wrapper = styled.div`
  width: 100%;
`;

const Home: React.FC = () => {
  const aboutSectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <Wrapper>
      <Hero aboutSectionRef={aboutSectionRef} />
      <About aboutSectionRef={aboutSectionRef} />
      <Experience />
      <Projects />
    </Wrapper>
  );
};

export default Home;
