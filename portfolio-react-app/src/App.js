import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from '../src/components/Navbar.js'
import Home from '../src/components/Home.js'
function App() {
  return (
    <>
      <Navbar />
      <Home />  
    </>
  );
}

export default App;
