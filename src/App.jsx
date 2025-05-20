// src/App.jsx
import Hero from './components/Hero';
import React from 'react';
import Skills from './components/Skills';
import Projects from './components/projects';
import Education from './components/education';
import Resources from './components/resources';
import Publications from './components/publications';
import Contact from './components/contact';

function App() {
  return (
    <main>
      <Hero />
      <Education/>
      <Publications/>
      <Skills />
      <Projects />
      <Resources/>
      <Contact/>
    </main>
  );
}

export default App;
