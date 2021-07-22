import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <Router>
      <Home />
      <HeroSection/>
    </Router>
  );
}
export default App;