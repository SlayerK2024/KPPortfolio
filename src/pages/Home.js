import React from 'react';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

function Home() {
  return (
    <div>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default Home;
