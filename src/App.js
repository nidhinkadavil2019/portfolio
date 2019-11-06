import React from 'react';
import SidebarLeft from './components/sidebarLeft';
import Home from './components/home'
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="colorlib-page">
		  <div class="container-wrap"></div>
      <SidebarLeft />
      <div id="colorlib-main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
