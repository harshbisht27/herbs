import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Analysis from './components/Analysis';
import ChatSection from './components/ChatSection';
import ContactUs from './components/ContactUs';
// import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add Navbar component here */}

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      {/* <ImageCarousel /> */}
      <section id="services"><Services /></section>
      <section id="videoSection"><VideoSection /></section>
      <section id="analysis"><Analysis /></section>
      {/* <section id="anyQuery"><ChatSection /></section> */}
      <section id="contactUs"><ContactUs /></section>
    </div>
  );
}

export default App;
