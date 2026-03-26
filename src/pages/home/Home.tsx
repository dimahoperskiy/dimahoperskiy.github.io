import React from 'react';
import { Hero, About, Experience, Projects } from '../../components';
import { Wrapper } from './Home.styles';

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
