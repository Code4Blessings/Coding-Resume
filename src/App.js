import React from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
