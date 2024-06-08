import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Members from './components/Members';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


function App() {

  
  return (
    <>
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Services></Services>
    {/* <Members></Members> */}
    <Contact></Contact>
    <Footer></Footer>
    </div>
    <Toaster/>
    </>
  )
}

export default App