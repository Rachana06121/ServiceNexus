import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Routes, Route, Router } from 'react-router-dom';
import Compony from './components/Compony';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Jobs from './components/Jobs';



function App() {

  
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Hero/>} />
        <Route path='/company' exact element={<Compony/>} />
        <Route path='/Services' exact element={<Services/>} />
        <Route path='/aboutUs' exact element={<AboutUs/>} />
        <Route path='/projects' exact element={<Projects/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/Blogs' exact element={<Blogs/>} />
        <Route path='/Jobs' exact element={<Jobs/>} />
      </Routes>
      <Footer>
      </Footer>
    </div>
    </>
  )
}

export default App