import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';

// index.html sets the initial theme before paint to avoid a flash.
const initialTheme = () => document.documentElement.dataset.theme || 'light';

function App() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable — theme just won't persist */
    }
  }, [theme]);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container">
        <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
        <Hero />
        <main id="main">
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>
        <GetInTouch />
      </div>
    </MotionConfig>
  );
}

export default App;
