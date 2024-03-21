import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import About from './Components/About';
import Context from './Components/Context';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>

      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Context/>
      <Footer/>
      <Toaster/>
      
    </Router>
  )
}

export default App
