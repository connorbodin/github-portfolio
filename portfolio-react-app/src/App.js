import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from './components/Skills.js';
import Navbar from '../src/components/Navbar.js'
import Home from '../src/components/Home.js'
import Work from '../src/components/Work.js'
import About from './components/About.js'
function App() {
  return (
    <>
      <Navbar />
      <Home />  
      <About />
      <Skills />
      <Work />
    </>
  );
}

export default App;
